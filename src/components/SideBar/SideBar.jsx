import React, { Component } from "react";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <section className={classes.sideBar}>
      <ul className={classes.sideList}>
        <li className={classes.item}>
          <a href="">Profile</a>
        </li>

        <li className={classes.item}>
          <a href="">Message</a>
        </li>

        <li className={classes.item}>
          <a href="">News</a>
        </li>

        <li className={classes.item}>
          <a href="">Music</a>
        </li>

        <li className={classes.item}>
          <a href="">Settings</a>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
