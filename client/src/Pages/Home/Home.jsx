import React from "react";
import Card from "./Card";
import CardShimmer from "./CardShimmer";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [posts, setposts] = useState([]);
  const getPost = async () => {
    try {
      const response = await axios.get("http://localhost:8001/api/getallposts");
      setposts(response.data.responseData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="Main">
      <h1>WELCOME</h1>
      {!posts.length ? (
        <CardShimmer></CardShimmer>
      ) : (
        <div className="card-grid">
          {posts?.map((post) => {
            return <Card key={post?._id} post={post}></Card>;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
