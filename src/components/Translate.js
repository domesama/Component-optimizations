import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ConvertLanguage from "./ConvertLanaguage";

const options = [
  { label: "Thai", value: "th" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
];

function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [input, setInput] = useState("");

  return (
    <div className="ui segment">
      <div className="field">
        <form className="ui form" style={{ marginTop: "10px" }}>
          <input
            className="input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
      </div>

      <Dropdown
        labelName={"Select a language"}
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />

      <hr />
      <div className="ui header"> Translated Texts</div>
      <ConvertLanguage selectedLanguage={language} userInput={input} />
    </div>
  );
}

export default Translate;
