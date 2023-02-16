import React, { Component } from "react";
import like from "../../../../img/like.svg";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.postMessage}>
        <img src="https://pngimg.com/uploads/pokeball/small/pokeball_PNG24.png" />
        {props.message}
      </div>
      <div className={classes.like}>
        <img src={like} />
        <p>{props.count}</p>
      </div>
    </div>
  );
};

export default Post;
