import React from "react";
import "./Gemini.css";
import { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

const Gemini = () => {
  const [Askquestion, setAskquestion] = useState("");
  const [Answer, setAnswer] = useState([]);
  const [PayloadQn, setPayloadQn] = useState(null);
  //   const PayloadQn
  const apiKey = "AIzaSyAjkxaO08jfNnTGNDr3CZ14Ce-tXqRgrhQ";
  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const trimmedQuestion = Askquestion.trim();

    // 4. Input Validation (use .trim() before sending)
    if (trimmedQuestion === "") {
      return;
    }
    setPayloadQn(trimmedQuestion);
    // 2. Instantly clear the input
    setAskquestion("");
    // 3. Clear the previous answer
    setAnswer(null);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [Askquestion],
      });
      setAnswer(response.text);
    } catch (error) {
      console.error("API Error:", error);
      setAnswer("Sorry, I encountered an error while fetching the response.");
    }
  };
  return (
    <div className="Gemini">
      <div className="PayloadContainer">
        <div className="PayloadQn">
          <p>{PayloadQn}</p>
        </div>
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
