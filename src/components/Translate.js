import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  { label: "African", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindu", value: "hi" }
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select Language"
        options={options}
        selected={language}
        onSelectChange={setLanguage}
      />

      <hr />
      <h3 className="ui header">
        <label>Output</label>
      </h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
