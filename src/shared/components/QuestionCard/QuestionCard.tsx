import React from "react";
import { QuestionBank } from "../../../App";
import { ShowTags } from "../index";
import { MdDelete } from "react-icons/md";
import "./QuestionCard.scss";

interface Props {
  QuestionCardDetails: QuestionBank;
  deleteQuestionCards: (id: string) => void;
}

const QuestionCard = (props: Props) => {
  return (
    <div className="ak-question-card">
      <h1>{props.QuestionCardDetails.question}</h1>
      <h4>{props.QuestionCardDetails.topic}</h4>
      {props.QuestionCardDetails.tags && (
        <ShowTags tags={props.QuestionCardDetails.tags} />
      )}
      <div
        className="delete-question-card"
        onClick={() => {
          props.deleteQuestionCards(props.QuestionCardDetails.id);
        }}
      >
        <MdDelete />
      </div>
    </div>
  );
};

export default QuestionCard;
