import React, { Fragment, useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <Fragment>
      <Header />
      <div className="ui container">
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
            labelName={"Select a color"}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>

        {/* <div
        className="ui pink button"
        style={{ marginTop: "20px", borderRadius: "50px" }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        Toggle Dropdown
      </div>

      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
        {/* <Translate /> */}
      </div>
    </Fragment>
  );
};
export default App;
