import React, { Component } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <section className={classes.myPost}>
      <div className={classes.postNews}>
        <h3> My posts</h3>
        <div className={classes.newPost}>
          <textarea>your news...</textarea>
        </div>
        <button className={classes.sendButton}>Send</button>
      </div>
      <Post message="What a wonderful day!!!" count="15" />
      <Post message="Nice car,man!" count="12" />
    </section>
  );
};

export default MyPosts;
