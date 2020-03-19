import React from "react";
import { useParams, useHistory } from "react-router-dom";
// import styled from "@emotion/styled";
import ButtonSave from "../components/ButtonSave";
import Form from "../components/Form";
import RadioInput from "../components/RadioInput";
import { patchPoll, getPoll } from "../api/polls";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const [isLoadingGetPoll, setIsLoadingGetPoll] = React.useState(true);

  React.useEffect(() => {
    async function doGetPoll() {
      setIsLoadingGetPoll(true);
      const poll = await getPoll(pollId);
      setPoll(poll);
      setIsLoadingGetPoll(false);
    }

    doGetPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoadingPatchPoll(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.id}`);
  }
  if (isLoadingGetPoll) {
    return <div>Loading...</div>;
  }

  const options = ["answerOne", "answerTwo", "answerThree"];
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>{poll.question}</h2>
        {options.map(option => (
          <RadioInput
            key={option}
            checked={answer === option}
            onChange={event => setAnswer(event.target.value)}
            value={option}
            label={poll[option]}
            name="answer"
          />
        ))}
        <ButtonSave disabled={isLoadingPatchPoll}>Save</ButtonSave>
      </Form>
    </div>
  );
}
export default Vote;
