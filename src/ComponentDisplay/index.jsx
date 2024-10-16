import "./Display.css";
import HoverCardDisplay from "./CardDisplay/HoverCardDisplay";
import ToggleDisplay from "./ToggleDisplay/ToggleDisplay";
import TypeWriterDisplay from "./TypeWriterDisplay/TypeWriterDisplay";
import { useState } from "react";
const Components = [
  {
    title: "Toggle",
    Component: ToggleDisplay,
  },
  {
    title: "Hover Card",
    Component: HoverCardDisplay,
  },
  {
    title: "Type Writer",
    Component: TypeWriterDisplay,
  },
];
const DisplayComponents = () => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <>
      {Components.map(({ Component, title }, index) => {
        return (
          <section className="component-warper" key={index}>
            <h3 onClick={() => setIsOpen(title)}>{title}</h3>
            <div>
              <Component
                isOpen={isOpen === title}
                isClosed={() => setIsOpen("")}
              />
            </div>
          </section>
        );
      })}
    </>
  );
};

export default DisplayComponents;
