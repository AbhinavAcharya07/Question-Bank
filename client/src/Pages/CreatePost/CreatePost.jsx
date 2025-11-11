import React from "react";
import "./CreatePost.css";
import Gemini from "./Gemini";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const CreatePost = () => {
  const [topic, setTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const { postId } = useParams();

  const getPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8001/api/getsinglepost?postId=${postId}`
      );
      const post = response.data.responseData;
      setTopic(post?.topic);
      setQuestion(post?.question);
      setAnswer(post?.answer);
      console.log(post?.topic);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (postId) {
        const response = await axios.put(
          "http://localhost:8001/api/updatepost",
          {
            postId,
            topic,
            question,
            answer,
          }
        );
        if (response?.data.responseData) {
          navigate(`/singlepost/${postId}`);
        }
      } else {
        const response = await axios.post(
          "http://localhost:8001/api/createpost",
          {
            topic,
            question,
            answer,
          }
        );
        if (response?.data.responseData) {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
    }

    console.log(response);
  };
  return (
    <div className="CreatePost">
      <div className="LeftSide">
        <Gemini className="Gemini"></Gemini>
      </div>
      <div className="Post">
        <h1>Create Post</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="topic"
            placeholder="Topic"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
          <input
            type="text"
            className="question"
            placeholder="Question"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
            }}
          />
          <textarea
            className="answer"
            rows="5"
            placeholder="Answer"
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          ></textarea>
          <div>
            <button type="submit" value="Send" className="submitWhite">
              {postId ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
      <div className="RightSide">
        <Gemini></Gemini>
      </div>
    </div>
  );
};

export default CreatePost;
