import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/singlepost/${post?._id}`);
      }}
    >
      <div className="cardH2">
        <h2 className="card-topic">{post?.topic}</h2>
      </div>
      <div className="card-content">
        <p className="card-question">{post?.question}</p>
        <p className="card-answer">{post?.answer}</p>
      </div>
    </div>
  );
};

export default Card;
