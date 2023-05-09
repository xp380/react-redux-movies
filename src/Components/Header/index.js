import React from "react";
import { PageHeader } from "antd";
import "./Header.css";

const Header = () => {
  const Titre = <div className="HeadLine">MovieDB App</div>;

  return (
    <div className="header-ghost-wrapper">
      <PageHeader ghost={true} title={Titre} />
    </div>
  );
};

export default Header;
