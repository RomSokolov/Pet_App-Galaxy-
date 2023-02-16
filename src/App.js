import React, { Component } from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className={classes.content}>
      <Header />
      <div className={classes.main}>
        <SideBar />
        <Profile />
      </div>
    </div>
  );
};

export default App;
