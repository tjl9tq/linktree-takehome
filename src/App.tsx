import { useState } from "react";

import "./App.css";
import data from "./data.json";
import Socials from "./Socials";
import ListSection from "./ListSection";
import GridSection from "./GridSection";

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
  return (
    <>
      <img src={profilePic} className="m-auto rounded-full h-24" />
      <h1 className="text-xl font-bold">{name}</h1> <div>{bio}</div>
      <Socials socials={socials} />
      {sections.map((section: Section) => {
        if (section.style === "list") {
          return <ListSection section={section} />;
        } else if (section.style === "grid") {
          return <GridSection section={section} />;
        }
      })}
    </>
  );
}

export default App;
