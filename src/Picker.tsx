import { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface PickerProps {
  component: string;
  property: string;
  title: string;
  options: { value: string; class: string }[];
}

const Picker = ({ component, property, title, options }: PickerProps) => {
  // TODO: Get existing theme and setOptionIndex to that one
  const [optionIndex, setOptionIndex] = useState(0);
  const { setThemeProperty } = useContext(ThemeContext);

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
    <>
      <div>{title}:</div>
      <div className="flex justify-center">
        <button onClick={handlePrevClick}>&lt;</button>
        <div className="capitalize">{options[optionIndex].value}</div>
        <button onClick={handleNextClick}>&gt;</button>
      </div>
    </>
  );
};

export default Picker;
