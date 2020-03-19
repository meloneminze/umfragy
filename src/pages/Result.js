import React from "react";
import { useParams } from "react-router-dom";
// import styled from "@emotion/styled";
import PieChart from "react-minimal-pie-chart";

const POLLS_API_URL =
  process.env.REACT_API_POLLS_API ||
  "https://my-json-server.typicode.com/meloneminze/umfragy/polls";
//"http://localhost:4000/polls"

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

  console.log(poll);
  const answerOneVotes =
    poll?.votes.filter(vote => vote === "answerOne").length || 0;
  const answerTwoVotes =
    poll?.votes.filter(vote => vote === "answerTwo").length || 0;
  const answerThreeVotes =
    poll?.votes.filter(vote => vote === "answerThree").length || 0;

  return (
    <div>
      <h2>Question was:</h2>
      <h2>{poll?.question}</h2>
      <h2>Results:</h2>
      <h2>
        {poll?.question} ({poll?.votes.length} votes)
      </h2>
      <div>
        {poll?.answerOne} ({answerOneVotes} votes)
      </div>
      <div>
        {poll?.answerTwo} ({answerTwoVotes} votes)
      </div>
      <div>
        {poll?.answerThree} ({answerThreeVotes} votes)
      </div>

      <PieChart
        data={[
          { title: poll?.answerOne, value: answerOneVotes, color: "#E38627" },
          { title: poll?.answerTwo, value: answerTwoVotes, color: "#C13C37" },
          {
            title: poll?.answerThree,
            value: answerThreeVotes,
            color: "#6A2135"
          }
        ]}
      />
    </div>
  );
}
export default Result;
