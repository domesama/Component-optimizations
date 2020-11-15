import React from "react";

function Link({ className, href, children }) {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={href} className={className} onClick={(e) => onClick(e)}>
      {children}
    </a>
  );
}

export default Link;