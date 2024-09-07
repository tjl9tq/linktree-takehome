export interface Properties {
  component: string;
  property: string;
  title: string;
  options: { value: string; class: string }[];
}

export const ButtonProperties: Properties[] = [
  {
    component: "link",
    property: "color",
    title: "Color",
    // TODO: Add sub-option to change color depth eg. bg-blue-200 instead of hardcoding everything to 500
    // Make into reusable color selector, so it can be used for multiple components
    options: [
      { value: "blue", class: "bg-blue-500" },
      { value: "red", class: "bg-red-500" },
      { value: "yellow", class: "bg-yellow-500" },
      { value: "orange", class: "bg-orange-500" },
    ],
  },
  {
    component: "link",
    property: "hover",
    title: "Hover effect",
    // TODO: Build more fun custom css animations
    options: [
      { value: "Opacity", class: "hover:!opacity-[0.8]" },
      { value: "Scale bigger", class: "hover:!scale-[1.05]" },
      { value: "Scale smaller", class: "hover:!scale-[0.95]" },
      { value: "Skew Y", class: "hover:!skew-y-3" },
    ],
  },
  {
    component: "link",
    property: "roundness",
    title: "roundeness",
    options: [
      { value: "0", class: "rounded-none" },
      { value: "1", class: "rounded-lg" },
      { value: "2", class: "rounded-xl" },
      { value: "3", class: "rounded-2xl" },
    ],
  },
  {
    component: "link",
    property: "font",
    title: "Font",
    options: [
      { value: "sans", class: "font-sans" },
      { value: "serif", class: "font-serif" },
      { value: "mono", class: "font-mono" },
    ],
  },
];

export const BackgroundProperties: Properties[] = [
  {
    component: "background",
    property: "color",
    title: "Color",
    options: [
      { value: "blue", class: "bg-blue-300" },
      { value: "red", class: "bg-red-300" },
      { value: "yellow", class: "bg-yellow-300" },
      { value: "orange", class: "bg-orange-300" },
    ],
  },
];
