import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface PickerProps {
  component: string;
  property: string;
  title: string;
  options: { value: string; class: string }[];
}

const Picker = ({ component, property, title, options }: PickerProps) => {
  const [optionIndex, setOptionIndex] = useState(0);
  const { setThemeProperty, theme } = useContext(ThemeContext);

  useEffect(() => {
    const currentClass = theme[component][property];
    const currentClassIndex = options.findIndex(
      (option) => option.class === currentClass
    );
    if (currentClassIndex !== -1) {
      setOptionIndex(currentClassIndex);
    }
  }, [component, options, property, theme]);

  const handlePrevClick = () => {
    setOptionIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? options.length - 1 : prevIndex - 1;
      setThemeProperty({ component, property, value: options[newIndex].class });
      return newIndex;
    });
  };

  const handleNextClick = () => {
    setOptionIndex((prevIndex) => {
      const newIndex = prevIndex === options.length - 1 ? 0 : prevIndex + 1;
      setThemeProperty({ component, property, value: options[newIndex].class });
      return newIndex;
    });
  };

  return (
    <div className="mt-2">
      <div className="text-xs font-bold">{title}:</div>
      <div className="flex justify-center items-center">
        <button onClick={handlePrevClick}>&lt;</button>
        <div className="capitalize text-xs pt-0.5 px-3">
          {options[optionIndex].value}
        </div>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
};

export default Picker;
