import React from "react";
import { Count } from "./Counter";
import CounterNumber from "./CounterNumber";
import './useState.css';
import MyInput from "./TextField";
import MyCheckbox from "./Checkbox";
import Form from "./Form";
import Reset from "./ResetState";
import CountLabel from "./StoryInfo";

export default function UseStates() {
  return (
    <>
      <h1>Adding state to a components</h1>
      <ol>
        <li>
          <h2 className="title">Count number</h2>
          <Count />
        </li>
        <li>
        <h2 className="title">Count number</h2>
          <CounterNumber />
        </li>
        <li>
        <h2 className="title">Text field (string)</h2>
          <MyInput />
        </li>
        <li>
        <h2 className="title">Checkbox (boolean)</h2>
          <MyCheckbox />
        </li>
        <li>
        <h2 className="title">Form (tow variables)</h2>
          <Form />
        </li>
        <li>
        <h2 className="title">Resetting state with a key</h2>
          <Reset />
        </li>
        <li>
        <h2 className="title">Storing information form pervious renders</h2>
          <CountLabel />
        </li>
      </ol>
    </>
  );
}
