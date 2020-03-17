import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import ButtonSave from "../components/ButtonSave";
import Form from "../components/Form";

const Label = styled.label`
  display: block;
`;

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/meloneminze/umfragy/polls";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await fetch(`${POLLS_API_URL}/${pollId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoll)
    });
    history.push(`/polls/${poll.id}`);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>{poll?.question}</h2>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerOne"
            checked={answer === "answerOne"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerOne}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerTwo"
            checked={answer === "answerTwo"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerTwo}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerThree"
            checked={answer === "answerThree"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerThree}
        </Label>
        <ButtonSave className="buttonSave">Save</ButtonSave>
      </Form>
    </div>
  );
}
export default Vote;
