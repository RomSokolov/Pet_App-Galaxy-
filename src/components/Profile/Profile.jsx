import React, { Component } from "react";
import classes from "./Profile.module.css";
import MyPosts from "./Myposts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.background}>
        <img src="https://i.7fon.org/1000/a5477773.jpg" />
      </div>
      <div className={classes.profile}>
        <section className={classes.aboutUser}>
          <img
            className={classes.avatar}
            src="https://i.pinimg.com/564x/a2/e1/23/a2e1232347c7477a31ea1f9349827428.jpg"
          />
          <ul className={classes.userInfo}>
            <h2>Simon</h2>
            <li className={classes.date}>Date Birth: 13 august</li>
            <li className={classes.city}>City: Space city</li>
            <li className={classes.education}>
              Education: Cyber-pirat university
            </li>
            <li className={classes.webSite}>
              <a href="https://ru.pinterest.com/" target="_blank">
                Web-site: pinterest
              </a>
            </li>
          </ul>
        </section>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
