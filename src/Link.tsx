import React, { useContext, useMemo } from "react";
import { ThemeContext } from "./ThemeContext";

interface LinkProps {
  href?: string;
  text: string;
  style?: "list" | "grid";
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  text,
  style = "list",
  className = "",
  imageSrc,
  imageAlt = "",
}) => {
  const { getComponentStyles } = useContext(ThemeContext);
  const themeStyles = getComponentStyles("link");
  const baseStyles =
    "flex items-center text-white font-semibold transition duration-200";
  const shapeStyles = {
    list: "px-4 py-2",
    grid: "p-4 flex-col",
  };

  const shapeClass = shapeStyles[style] || shapeStyles.grid; // Default to pill if undefined

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${shapeClass} ${themeStyles} transition duration-300 ${className}`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`${
            style === "list"
              ? "w-8 h-8 rounded-full mr-2"
              : "h-32 rounded-lg mb-2"
          }`}
        />
      )}
      <div className="text-center w-full">{text}</div>
    </a>
  );
};

export default Link;
