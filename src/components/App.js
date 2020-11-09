import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a frontend JavaScript Framework",
  },
  {
    title: "Whyh use React?",
    content: "Cuz React is gud OwO",
  },
  {
    title: "How 2 use React?",
    content: "Just create dem components",
  },
];

function App(props) {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
