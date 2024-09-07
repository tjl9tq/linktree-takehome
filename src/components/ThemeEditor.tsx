import { useContext, useEffect, useState } from "react";
import { Theme, ThemeContext } from "../ThemeContext";
import {
  BackgroundProperties,
  ButtonProperties,
  SocialsProperties,
} from "./Properties";
import Editor from "./Editor";

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

  const getProperties = () => {
    switch (active) {
      case "button":
        return ButtonProperties;
      case "background":
        return BackgroundProperties;
      case "socials":
        return SocialsProperties;
      default:
        return null;
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
          <button
            onClick={() => setActive("socials")}
            className={`w-full ${active === "socials" && "bg-blue-200"}`}
          >
            Socials
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
          {active === "favorites" ? (
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
                    {/* Make reusable button component (or start using MUI instead) */}
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
          ) : (
            <Editor properties={getProperties()} />
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
