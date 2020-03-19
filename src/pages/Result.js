import React from "react";
import { useParams } from "react-router-dom";
// import styled from "@emotion/styled";
import PieChart from "react-minimal-pie-chart";

import { getPoll } from "../api/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);

      setPoll(poll);
    }

    doGetPoll();
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
