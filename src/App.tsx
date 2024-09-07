import "./App.css";
import data from "./data.json";
import Socials from "./components/Socials";
import ListSection from "./components/ListSection";
import GridSection from "./components/GridSection";
import ThemeEditor from "./components/ThemeEditor";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export interface Section {
  title?: string;
  style: string;
  items: {
    title: string;
    img: string;
    href: string;
  }[];
}

const { socials, sections, profilePic, name, bio } = data;

function App() {
  const { getComponentStyles } = useContext(ThemeContext);

  const themeStyles = getComponentStyles("background");
  return (
    <div className={`${themeStyles ?? ""} transition duration-200`}>
      <div className="p-6">
        <img src={profilePic} className="m-auto rounded-full h-24 " />
        <h1 className="text-xl font-bold">{name}</h1>
        <div>{bio}</div>
        <Socials socials={socials} />
        {sections.map((section: Section) => {
          if (section.style === "list") {
            return (
              <div key={section.title}>
                <ListSection section={section} />
              </div>
            );
          } else if (section.style === "grid") {
            return (
              <div key={section.title}>
                <GridSection section={section} />
              </div>
            );
          }
        })}
        {/* TODO: Only render this for logged in users in edit mode */}
        <ThemeEditor />
      </div>
    </div>
  );
}

export default App;
