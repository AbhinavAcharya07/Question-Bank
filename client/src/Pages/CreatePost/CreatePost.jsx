import React from "react";
import "./CreatePost.css";
const CreatePost = () => {
  return (
    <>
      <div className="Post">
        <h1>Create Post</h1>
        <form className="form">
          <input type="text" className="topic" placeholder="Topic" />
          <input type="text" className="question" placeholder="Question" />
          <textarea className="answer" rows="5" placeholder="Answer"></textarea>
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
