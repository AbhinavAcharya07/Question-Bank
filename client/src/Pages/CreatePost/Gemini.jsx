import React from "react";
import { ModeSwitcher } from "../../contextProvider";
import { useContext } from "react";
import "./Gemini.css";
import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "./AiSearchShimmer.css";

const Gemini = () => {
  const { color } = useContext(ModeSwitcher);
  const [Askquestion, setAskquestion] = useState("");
  const [Answer, setAnswer] = useState(null);
  const [PayloadQn, setPayloadQn] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  //   const PayloadQn
  const display1 = () => {
    if (IsLoading && PayloadQn) {
      return "PayloadContainerShimmer-Wte";
    } else if (!IsLoading && !PayloadQn) {
      return "PayloadContainer";
    } else {
      return "PayloadContainer-Wte";
    }
  };
  const display2 = () => {
    if (IsLoading && PayloadQn) {
      return "PayloadContainerShimmer-Blk";
    } else if (!IsLoading && !PayloadQn) {
      return "PayloadContainer";
    } else {
      return "PayloadContainer-Blk";
    }
  };
  const displayAnswer1 = () => {
    if (PayloadQn) {
      return "PayloadQn-Wte";
    } else {
      return "PayloadQn";
    }
  };
  const displayAnswer2 = () => {
    if (PayloadQn) {
      return "PayloadQn-Blk";
    } else {
      return "PayloadQn";
    }
  };
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
        config: {
          systemInstruction:
            "You are a helpful AI assistant. You provide accurate and comprehensive definition. Your response MUST be a single, cohesive paragraph of exactly 4 to 5 lines and with examples of exactly 2-3 lines in another paragraph. Do not use lists or subheadings.",
        },
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
    <div className={color === "white" ? "Gemini-Wte" : "Gemini-Blk"}>
      <div className={color === "white" ? displayAnswer1() : displayAnswer2()}>
        <p className={color === "white" ? "Answer-Wte" : "Answer-Blk"}>
          {PayloadQn}
        </p>
      </div>
      <div
        className={color === "white" ? display1() : display2()}
        // className="PayloadContainer"
        // id="PayloadContainer"
      >
        <p className={color === "white" ? "Answer-Wte" : "Answer-Blk"}>
          {Answer}
        </p>
      </div>
      <div
        className={color === "white" ? "InputWrapper-Wte" : "InputWrapper-Blk"}
      >
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
