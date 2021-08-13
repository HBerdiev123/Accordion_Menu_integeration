import { useState, useEffect, useRef } from "react";
import React from "react";

const Dropdown = ({ label, options, selected, onSelectChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const [toggled, setToggle] = useState(false);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedItems = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => onSelectChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            setOpen(!open);
            console.log("dropdown");
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
