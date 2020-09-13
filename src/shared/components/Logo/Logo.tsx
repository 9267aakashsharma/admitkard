import React from "react";
import { Assets } from "../../../constant";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="ad-logo">
      <img src={Assets.LOGO} alt={"admitkard_logo"} />
    </div>
  );
};

export default Logo;
