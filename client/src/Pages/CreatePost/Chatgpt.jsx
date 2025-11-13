import React from "react";
import "./Gemini.css";
import { useState } from "react";
import OpenAI from "openai";
import "./AiSearchShimmer.css";

const Gemini = () => {
  const [Askquestion, setAskquestion] = useState("");
  const [Answer, setAnswer] = useState(null);
  const [PayloadQn, setPayloadQn] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);
  //   const PayloadQn
  const openai = new OpenAI({
    apiKey:
      "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",
    dangerouslyAllowBrowser: true,
  });

  const main = async (question) => {
    setIsLoading(true);
    try {
      const response = openai.responses.create({
        model: "gpt-5-nano",
        input: [
          {
            role: "user",
            content: [{ type: "input_text", text: question }],
          },
        ],
        store: true,
      });

      response.then((result) => setAnswer(result.output_text));
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
          placeholder="ChatGPT"
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
