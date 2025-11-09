import React from "react";
import "./CreatePost.css";
import { useState } from "react";
import axios from "axios";
const CreatePost = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8001/api/createpost", {
      topic,
      question,
      answer,
    });
    console.log(response);
  };
  return (
    <>
      <div className="Post">
        <h1>Create Post</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="topic"
            placeholder="Topic"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
          <input
            type="text"
            className="question"
            placeholder="Question"
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <textarea
            className="answer"
            rows="5"
            placeholder="Answer"
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          ></textarea>
          <div>
            <button type="submit" value="Send" className="submitWhite">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
