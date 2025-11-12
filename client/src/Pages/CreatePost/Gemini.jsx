import React from "react";
import "./Gemini.css";
import { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

const Gemini = () => {
  const [Askquestion, setAskquestion] = useState("");
  const [Answer, setAnswer] = useState("");
  const apiKey = "AIzaSyAjkxaO08jfNnTGNDr3CZ14Ce-tXqRgrhQ";
  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });
  const SubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [Askquestion],
      });
      setAskquestion("");
      setAnswer(response.text);
    } catch (error) {
      console.error("API Error:", error);
      setAnswer("Sorry, I encountered an error while fetching the response.");
    }
  };
  return (
    <div className="Gemini">
      <div className="PayloadContainer">
        <p>{Answer}</p>
      </div>
      <div className="InputWrapper">
        <textarea
          name=""
          className="dynamicTextArea"
          placeholder="Gemini"
          onChange={(event) => {
            setAskquestion(event.target.value);
          }}
          value={Askquestion}
        ></textarea>
        <button
          className="send-btn"
          type="submit"
          value="send"
          onClick={SubmitHandler}
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default Gemini;
