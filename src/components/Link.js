import React from "react";

function Link({ className, href, children }) {
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
  };
  return (
    <a href={href} className={className} onClick={(e) => onClick(e)}>
      {children}
    </a>
  );
}

export default Link;
