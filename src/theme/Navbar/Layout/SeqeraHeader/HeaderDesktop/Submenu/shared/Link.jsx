import React from "react";

import Link from "@docusaurus/Link";
import { useHeaderContext } from "../../../context";

const PanelLink = ({ children, to, className, sameTab }) => {
  const { closeMenu } = useHeaderContext();
  function handleClick(e) {
    if (e.shiftKey || e.ctrlKey || e.metaKey) return;
    closeMenu();
  }

  if (sameTab) {
    return (
      <a href={to} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
};

export default PanelLink;
