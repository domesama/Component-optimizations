import React, { useState, useEffect, useRef, Fragment } from "react";

function Dropdown({ options, selected, onSelectedChange, labelName }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  const listOfOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  return (
    <Fragment>
      <div className="ui segment">
        <div className="ui form" ref={ref}>
          <div className="field">
            <label className="label" style={{ marginLeft: "2.5px" }}>
              {labelName}
            </label>
            <div
              onClick={() => setOpen(!open)}
              className={`ui selection dropdown ${
                open ? "visible active" : ""
              }`}
            >
              <i className="dropdown icon"></i>
              <div className="text"> {selected.label}</div>
              <div className={`menu ${open ? "visible transition" : ""}`}>
                {listOfOptions}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className={`ui  ${selected.value} segment center aligned`}
        style={{ color: selected.value }}
      >
        I am {selected.value} color
      </div> */}
    </Fragment>
  );
}

export default Dropdown;
