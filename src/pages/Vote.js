import React from "react";
import { useParams, useHistory } from "react-router-dom";
// import styled from "@emotion/styled";
import ButtonSave from "../components/ButtonSave";
import Form from "../components/Form";
import RadioInput from "../components/RadioInput";
import { patchPoll, getPoll } from "../api/polls";
import Loading from "../components/Loading";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const [isLoadingGetPoll, setIsLoadingGetPoll] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(false);

  React.useEffect(() => {
    async function doGetPoll() {
      try {
        setIsLoadingGetPoll(true);
        const poll = await getPoll(pollId);
        setPoll(poll);
        setIsLoadingGetPoll(false);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }
    doGetPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoadingPatchPoll(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.idvote}`);
  }
  if (isLoadingGetPoll) {
    return <div>Loading...</div>;
  }

  const options = ["answerOne", "answerTwo", "answerThree"];

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }
  if (isLoadingGetPoll) {
    return <Loading />;
  }

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
