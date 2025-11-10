import React from "react";
import "./SinglePost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const SinglePost = () => {
  const { postId } = useParams();
  console.log(postId);
  const [post, setpost] = useState();

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
  return (
    <div className="singlePost-Container">
      <div className="singlePost-Card">
        <h1>{post?.topic}</h1>
        <h2>{post?.question}</h2>
        <p>{post?.answer}</p>
        <div className="buttons">
          <button id="deletebtn">Delete</button>
          <button id="editbtn">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
