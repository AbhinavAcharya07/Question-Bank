import React from "react";
import "./SinglePost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const SinglePost = () => {
  const { postId } = useParams();
  console.log(postId);
  const [post, setpost] = useState();
  const navigate = useNavigate();

  const getPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8001/api/getsinglepost?postId=${postId}`
      );
      setpost(response.data.responseData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);
  const deletePost = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:8001/api/deletepost?postId",
        {
          data: {
            postId,
          },
        }
      );
      if (response.data.responseData) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="singlePost-Container">
      <div className="singlePost-Card">
        <h1>{post?.topic}</h1>
        <h2>{post?.question}</h2>
        <p>{post?.answer}</p>
        <div className="buttons">
          <button id="deletebtn" onClick={deletePost}>
            Delete
          </button>
          <button
            id="editbtn"
            onClick={() => navigate(`/updatepost/${postId}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
