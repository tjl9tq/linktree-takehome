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

const ThemeEditor = () => {
  return (
    <div className="fixed top-1 right-1 bg-white h-1/4 w-1/4 rounded border-black border-2 py-2 px-4">
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
        title="Roundess"
        options={linkRoundnessOptions}
      />
    </div>
  );
};

export default ThemeEditor;
