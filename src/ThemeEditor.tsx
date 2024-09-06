import { useState } from "react";
import Link from "./Link";
import Picker from "./Picker";

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

const ThemeEditor = () => {
  const [minimized, setMinimized] = useState(true);
  return (
    <div
      className={`overflow-hidden fixed top-1 right-1 bg-white  w-[400px] rounded border-black border-2 py-1 px-4 ${
        minimized ? "h-[28px]" : "h-[300px]"
      }`}
    >
      <p className="font-bold text-xs my-1">Theme Editor</p>
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
      <button
        onClick={() => setMinimized((prev) => !prev)}
        className={`absolute top-0 left-2 ${
          minimized ? "rotate-90" : "-rotate-90"
        }`}
      >
        &lt;
      </button>
    </div>
  );
};

export default ThemeEditor;
