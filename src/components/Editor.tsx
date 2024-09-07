import Link from "./Link";
import Picker from "./Picker";
import { Properties } from "./Properties";

const Editor = ({ properties }: { properties: Properties[] | null }) => {
  if (!properties) return;
  const getComponent = () => {
    switch (properties[0].component) {
      case "link":
        return <Link text="Button" />;
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
