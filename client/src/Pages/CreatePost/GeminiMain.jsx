import React, { useState } from "react";
import "./Gemini.css";
import "./AiSearchShimmer.css";
import { GoogleGenAI } from "@google/genai";

const GeminiMain = () => {
  const [Askquestion, setAskquestion] = useState("");
  const [Answer, setAnswer] = useState(null);
  const [PayloadQn, setPayloadQn] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const apiKey = "AIzaSyAjkxaO08jfNnTGNDr3CZ14Ce-tXqRgrhQ"; // don't hardcode in production
  const genAI = new GoogleGenAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const main = async (question) => {
    setIsLoading(true);
    try {
      const result = await model.generateContent(question);
      const response = await result.response;
      const text = await response.text();
      setAnswer(text);
      console.log(text);
    } catch (error) {
      console.error("API Error:", error);
      setAnswer("Sorry, I encountered an error while fetching the response.");
    } finally {
      setIsLoading(false);
    }
  };

  const SubmitHandler = (e) => {
    const trimmedQuestion = Askquestion.trim();
    if (!trimmedQuestion) return;

    setPayloadQn(trimmedQuestion);
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
          className="dynamicTextArea"
          placeholder="Ask Gemini"
          onChange={(e) => setAskquestion(e.target.value)}
          value={Askquestion}
        ></textarea>
        <button className="send-btn" type="submit" onClick={SubmitHandler}>
          Ask
        </button>
      </div>
    </div>
  );
};

export default GeminiMain;
