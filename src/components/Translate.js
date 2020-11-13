import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Japanese", value: "jp" },
  { label: "Korean", value: "kr" },
];

function Translate() {
  const [language, setLanguage] = useState(options[0]);

  return (
    <div>
      <Dropdown
        labelName={"Select a language"}
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
}

export default Translate;
