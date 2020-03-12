import React from "react";
import { Link } from "react-router-dom";
import CardQuestion from "../components/CardQuestion";
import CardAnswer from "../components/CardAnswer";
import "./Add.css";
import ButtonClear from "../components/ButtonClear";
import ButtonSave from "../components/ButtonSave";

function Add() {
  return (
    <div>
      <h2>Your Question?</h2>
      <CardQuestion>
        <form className="add-form">
          <input
            type="text"
            placeholder="Enter question"
            className="add-form__input add-form__input-question"
          ></input>
        </form>
      </CardQuestion>
      <h2>Possible Answers:</h2>
      <CardAnswer>
        <form>
          <input
            type="text"
            placeholder="Answer 1"
            className="add-form__input add-form__input-answer"
          ></input>

          <input
            type="text"
            placeholder="Answer 2"
            className="add-form__input add-form__input-answer"
          ></input>
          <input
            type="text"
            placeholder="Answer 3"
            className="add-form__input add-form__input-answer"
          ></input>
          <ButtonSave className="buttonSave">Save</ButtonSave>
          <ButtonClear>Clear</ButtonClear>
        </form>

        <Link to="/vote">Vote</Link>
      </CardAnswer>
    </div>
  );
}
export default Add;
