import React, { Fragment, useState } from "react";

function Accordion({ items }) {
  const [clickedIndex, setIndex] = useState(null);

  const ontitleClicked = (index) => {
    setIndex(index);
  };
  const listOfItems = items.map((item, index) => {
    const isActive = index === clickedIndex ? "active" : "inactive";
    return (
      <Fragment key={item.title}>
        <div
          className={`title ${isActive}`}
          onClick={() => ontitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return <div className="ui styled accordion">{listOfItems}</div>;
}

export default Accordion;
