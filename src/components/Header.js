import React from "react";
import Link from "./Link";

function Header() {
  return (
    <div className="ui fluid four item menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/search" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
}

export default Header;
