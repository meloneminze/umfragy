import React from "react";
import { Link } from "react-router-dom";
import CardQuestion from "../components/CardQuestion";
import CardAnswer from "../components/CardAnswer";
import "./Add.css";
// import ButtonClear from "../components/ButtonClear";
import ButtonSave from "../components/ButtonSave";
// import Form from "../components/Form";

import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    primary: "azure",
    second: "#93b2f8",
    third: "#ffcce6"
  }
};

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
    <div className="div">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Your Question?</h2>
        <CardQuestion>
          <input
            type="text"
            placeholder="Enter question"
            className="add-form__input add-form__input-question"
            value={question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
          ></input>
        </CardQuestion>
        <h2>Possible Answers:</h2>
        <CardAnswer>
          <input
            type="text"
            placeholder="Answer 1"
            className="add-form__input add-form__input-answer"
            value={answerOne}
            onChange={event => {
              setAnswerOne(event.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Answer 2"
            className="add-form__input add-form__input-answer"
            value={answerTwo}
            onChange={event => {
              setAnswerTwo(event.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Answer 3"
            className="add-form__input add-form__input-answer"
            value={answerThree}
            onChange={event => {
              setAnswerThree(event.target.value);
            }}
          ></input>
          <ButtonSave className="buttonSave">Save</ButtonSave>
          <button
            className="buttonClear"
            type="button"
            onClick={event => {
              setAnswerTwo("");
              setAnswerOne("");
              setAnswerThree("");
              setQuestion("");
            }}
          >
            Clear
          </button>
          {/* <ButtonClear className="buttonClear">Clear</ButtonClear> */}

          <Link to="/polls/:pollId/vote">Vote</Link>
        </CardAnswer>
      </form>
    </div>
  );
}
export default Add;
