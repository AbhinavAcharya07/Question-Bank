import React from "react";
import "./Gemini.css";
import { useState, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import "./AiSearchShimmer.css";

const Gemini = () => {
  const [Askquestion, setAskquestion] = useState("");
  const [Answer, setAnswer] = useState(null);
  const [PayloadQn, setPayloadQn] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  //   const PayloadQn
  const apiKey = import.meta.env.VITE_SECRET;
  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });
  const main = async (question) => {
    setIsLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [question],
      });
      setAnswer(response.text);
      console.log(response.text);
    } catch (error) {
      console.error("API Error:", error);
      setAnswer("Sorry, I encountered an error while fetching the response.");
    } finally {
      setIsLoading(false);
    }
  };
  const SubmitHandler = (e) => {
    const trimmedQuestion = Askquestion.trim();

    if (trimmedQuestion === "") {
      return;
    }

    setPayloadQn(trimmedQuestion);
    setAskquestion("");
    setAnswer(null);

    main(trimmedQuestion);
  };
  return (
    <div className="Gemini">
      <div className="PayloadQn">
        <p>{PayloadQn}</p>
      </div>
      <div
        className={IsLoading ? "PayloadContainerShimmer" : "PayloadContainer"}
      >
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
