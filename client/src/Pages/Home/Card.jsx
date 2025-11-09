import React from "react";
import "./Card.css";
const Card = ({ post }) => {
  return (
    <div className="card">
      <h2>{post?.topic}</h2>
      <p>{post?.question} </p>
      <p>{post?.answer} </p>
    </div>
  );
};

export default Card;
