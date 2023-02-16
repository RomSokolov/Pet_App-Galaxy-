import React, { Component } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <p>
          <img
            className={classes.logo}
            src="https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/75674/optimized_large_thumb_stage.jpg"
            width="60px"
          />
        </p>
      </nav>
    </header>
  );
};

export default Header;
