import React from "react";
import "./Card.css";
const Card = ({ post }) => {
  return (
    <div className="card">
      <h2 className="card-topic">{post?.topic}</h2>
      <div className="card-content">
        <p className="card-question">{post?.question} </p>
        <p className="card-answer">{post?.answer} </p>
      </div>
    </div>
  );
};

export default Card;
