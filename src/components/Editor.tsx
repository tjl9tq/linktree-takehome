import Link from "./Link";
import Picker from "./Picker";
import Instagram from "../assets/instagram";
import { Properties } from "./Properties";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Editor = ({ properties }: { properties: Properties[] | null }) => {
  const { getComponentStyles } = useContext(ThemeContext);
  const ThemeStyles = getComponentStyles("socials");
  if (!properties) return;
  const getComponent = () => {
    switch (properties[0].component) {
      case "link":
        return <Link text="Button" />;
      case "socials":
        return (
          <Instagram
            className={`${ThemeStyles} transition duration-200 m-auto`}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {getComponent()}
      {properties.map((property) => {
        return (
          <Picker
            key={property.property}
            component={property.component}
            property={property.property}
            title={property.title}
            options={property.options}
          />
        );
      })}
    </>
  );
};

export default Editor;
