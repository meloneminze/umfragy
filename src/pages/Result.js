import React from "react";
import { useParams } from "react-router-dom";
// import styled from "@emotion/styled";

const POLLS_API_URL =
  process.env.REACT_API_POLLS_API ||
  "https://my-json-server.typicode.com/meloneminze/umfragy/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId, setPoll]);

  return (
    <div>
      <h2>Question was:</h2>
      <h2>{poll?.question}</h2>
      <h2>Results:</h2>
      <div>{poll?.answerOne}</div>
      <div>{poll?.answerTwo}</div>
      <div>{poll?.answerThree}</div>
    </div>
  );
}
export default Result;
