import { useContext, useEffect, useState } from "react";
import Link from "./Link";
import Picker from "./Picker";
import { Theme, ThemeContext } from "./ThemeContext";

// TODO: Add sub-option to change color depth eg. bg-blue-200 instead of hardcoding everything to 500
const linkColorOptions = [
  { value: "blue", class: "bg-blue-500" },
  { value: "red", class: "bg-red-500" },
  { value: "yellow", class: "bg-yellow-500" },
  { value: "orange", class: "bg-orange-500" },
];

// TODO: Build more fun custom css animations
const linkHoverOptions = [
  { value: "Opacity", class: "hover:!opacity-[0.8]" },
  { value: "Scale bigger", class: "hover:!scale-[1.05]" },
  { value: "Scale smaller", class: "hover:!scale-[0.95]" },
  { value: "Skew Y", class: "hover:!skew-y-3" },
];

const linkRoundnessOptions = [
  { value: "0", class: "rounded-none" },
  { value: "1", class: "rounded-lg" },
  { value: "2", class: "rounded-xl" },
  { value: "3", class: "rounded-2xl" },
];

const linkFontOptions = [
  { value: "sans", class: "font-sans" },
  { value: "serif", class: "font-serif" },
  { value: "mono", class: "font-mono" },
];

const backgroundColorOptions = [
  { value: "blue", class: "bg-blue-300" },
  { value: "red", class: "bg-red-300" },
  { value: "yellow", class: "bg-yellow-300" },
  { value: "orange", class: "bg-orange-300" },
];

// TODO: Make this draggable
// TODO: Add options to customize Bio text
// TODO: Add options to customize socials
const ThemeEditor = () => {
  const [minimized, setMinimized] = useState(false);
  const [active, setActive] = useState("button");
  const [savedThemes, setSavedThemes] = useState<null | Theme[]>(null);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setSavedThemes(
      JSON.parse(localStorage.getItem("favorite-themes") ?? "null")
    );
  }, []);

  const saveToFavorites = () => {
    // TODO: Allow user to name favorites and identify themes with an id number rather than index
    const favorites: Theme[] | null =
      savedThemes ??
      JSON.parse(localStorage.getItem("favorite-themes") ?? "null");
    if (theme) {
      const newFavorites = favorites ? [...favorites, theme] : [theme];
      setSavedThemes(newFavorites);
      localStorage.setItem("favorite-themes", JSON.stringify(newFavorites));
    }
  };

  const loadFavorite = (index: number) => {
    const favorites = localStorage.getItem("favorite-themes");
    const parsed: Theme[] = JSON.parse(favorites ?? "null");
    if (parsed) {
      setSavedThemes(parsed);
      setTheme(parsed[index]);
    }
  };

  const deleteFavorite = (index: number) => {
    const favorites: Theme[] | null =
      savedThemes ??
      JSON.parse(localStorage.getItem("favorite-themes") ?? "null");
    if (favorites) {
      const newFavorites = [...favorites];
      newFavorites.splice(index, 1);
      setSavedThemes(newFavorites);
      localStorage.setItem("favorite-themes", JSON.stringify(newFavorites));
    }
  };

  return (
    <div
      className={`overflow-hidden fixed top-1 right-1 bg-white  w-[480px] rounded border-black border-2 py-1 px-4 ${
        minimized ? "h-[32px]" : "h-[300px]"
      }`}
    >
      <div>
        <p className="font-bold text-xs my-1">Theme Editor</p>
        <hr className="my-2" />
      </div>
      <div className="flex">
        <div className="w-1/2 h-[240px] border-r border-grey px-2">
          <p className="font-bold text-xs my-1">Components</p>
          <button
            onClick={() => setActive("button")}
            className={`w-full ${active === "button" && "bg-blue-200"} `}
          >
            Button
          </button>
          <button
            onClick={() => setActive("background")}
            className={`w-full ${active === "background" && "bg-blue-200"}`}
          >
            Background
          </button>
          <hr className="my-2" />

          <button
            onClick={() => setActive("favorites")}
            className={`w-full ${active === "favorites" && "bg-blue-200"}`}
          >
            Favorites
          </button>
        </div>
        <div className="w-1/2 px-3">
          {active === "button" && (
            <>
              {/*TODO: render these from a JSON object */}
              <Link text="Button" />
              <Picker
                component="link"
                property="color"
                title="Color"
                options={linkColorOptions}
              />
              <Picker
                component="link"
                property="hover"
                title="Hover Effect"
                options={linkHoverOptions}
              />
              <Picker
                component="link"
                property="roundness"
                title="Roundness"
                options={linkRoundnessOptions}
              />
              <Picker
                component="link"
                property="font"
                title="Font"
                options={linkFontOptions}
              />
            </>
          )}

          {active === "background" && (
            <>
              <Picker
                component="background"
                property="color"
                title="Color"
                options={backgroundColorOptions}
              />
              {/* TODO: Upload image and set as Background */}
            </>
          )}

          {active === "favorites" && (
            <>
              <button
                onClick={() => saveToFavorites()}
                className="text-xs font-bold bg-blue-200 p-2 rounded-lg hover:!opacity-[.80]"
              >
                Save New
              </button>
              <hr className="my-2" />
              {savedThemes?.map((theme, index) => {
                return (
                  <div key={`theme-${index}`}>
                    <span className="mx-2 text-xs font-bold">
                      Favorite {index + 1}
                    </span>
                    <button
                      className="text-xs bg-blue-200 px-2 py-0.5 m-0.5 rounded-lg"
                      onClick={() => loadFavorite(index)}
                    >
                      Load
                    </button>
                    <button
                      className="text-xs bg-red-500 px-2 py-0.5 m-0.5 rounded-lg col text-white"
                      onClick={() => deleteFavorite(index)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </>
          )}
          <button
            onClick={() => setMinimized((prev) => !prev)}
            className={`absolute top-0 left-2 ${
              minimized ? "rotate-90" : "-rotate-90"
            }`}
          >
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeEditor;
