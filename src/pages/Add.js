import React from "react";
import { Link } from "react-router-dom";
import CardQuestion from "../components/CardQuestion";
import CardAnswer from "../components/CardAnswer";
import styled from "@emotion/styled";
import ButtonSave from "../components/ButtonSave";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  font-family: monospace;
`;

const Input = styled.input`
  width: 100%;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 10px;
  text-align: center;
`;

const QuestionInput = styled(Input)`
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 10px;
  height: 150px;
  max-width: 200px;
  width: 100%;
  font-family: monospace;
`;

const AnswerInput = styled(Input)`
  background: ${props => props.theme.colors.backgroundCard};
  border-radius: 10px;
  height: 50px;
  width: 200px;
  margin-bottom: 10px;
`;

const ButtonClear = styled.button`
  background: ${props => props.theme.colors.ButtonClear};
  border-radius: 10px;
  padding: 10px 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
  text-align: right;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function Add() {
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      votes: []
    };

    const response = await fetch(
      process.env.REACT_APP_POLLS_API ||
        "https://my-json-server.typicode.com/meloneminze/umfragy/polls",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(poll)
      }
    );
    const createdPoll = await response.json();
    alert(`Created poll with the id ${createdPoll.id}`);
  }

  return (
    <DIV>
      <Form onSubmit={handleSubmit}>
        <h2>Your Question?</h2>
        <CardQuestion>
          <QuestionInput
            type="text"
            placeholder="Enter question"
            value={question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
          ></QuestionInput>
        </CardQuestion>
        <h2>Possible Answers:</h2>
        <CardAnswer>
          <AnswerInput
            type="text"
            placeholder="Answer 1"
            value={answerOne}
            onChange={event => {
              setAnswerOne(event.target.value);
            }}
          ></AnswerInput>
          <AnswerInput
            type="text"
            placeholder="Answer 2"
            value={answerTwo}
            onChange={event => {
              setAnswerTwo(event.target.value);
            }}
          ></AnswerInput>
          <AnswerInput
            type="text"
            placeholder="Answer 3"
            value={answerThree}
            onChange={event => {
              setAnswerThree(event.target.value);
            }}
          ></AnswerInput>
          <ButtonSave>Save</ButtonSave>
          <ButtonClear
            type="button"
            onClick={event => {
              setAnswerTwo("");
              setAnswerOne("");
              setAnswerThree("");
              setQuestion("");
            }}
          >
            Clear
          </ButtonClear>

          <Link to="/polls/:pollId/vote">Vote</Link>
        </CardAnswer>
      </Form>
    </DIV>
  );
}
export default Add;
