import React from "react";

interface LinkProps {
  href: string;
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
  const baseStyles =
    "flex items-center text-white font-semibold transition duration-300";
  const shapeStyles = {
    list: "rounded-full px-4 py-2",
    grid: "rounded-lg p-4",
  };

  const shapeClass = shapeStyles[style] || shapeStyles.grid; // Default to pill if undefined

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${shapeClass} bg-blue-500 hover:bg-blue-700 transition duration-300 ${className}`}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`${
            style === "list"
              ? "w-8 h-8 rounded-full mr-2"
              : "w-12 h-12 rounded-lg mb-2"
          }`}
        />
      )}
      {text}
    </a>
  );
};

export default Link;
