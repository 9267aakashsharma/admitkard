import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { MdAdd } from "react-icons/md";
import { QuestionBank } from "../../../App";
import { v4 as uuid } from "uuid";
import "./AddQuestion.scss";

interface Props {
  toggleAddQuestion: () => void;
  addQuestion: (question: QuestionBank) => void;
}

const Sidebar = (props: Props) => {
  const [newQuestionCard, setNewQuestionCard] = useState<QuestionBank>({
    id: uuid(),
    question: "",
    topic: "",
    tags: [],
  });

  const sendQuestion = () => {
    props.addQuestion(newQuestionCard);
  };

  return (
    <div className="sidebar" onClick={props.toggleAddQuestion}>
      <div
        className="add-question"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="add-question-inner">
          <div className="question">
            <DebounceInput
              debounceTimeout={300}
              placeholder="Add Question"
              value={newQuestionCard?.question}
              onChange={(e) => {
                setNewQuestionCard({
                  ...newQuestionCard,
                  question: e.target.value,
                });
              }}
            />
          </div>
          <div className="topics">
            <DebounceInput
              debounceTimeout={300}
              placeholder="Add topic"
              value={newQuestionCard?.topic}
              onChange={(e) => {
                setNewQuestionCard({
                  ...newQuestionCard,
                  topic: e.target.value,
                });
                e.target.value = "";
              }}
            />
          </div>
          <div className="add-tags">
            <div className="tags">
              <DebounceInput
                debounceTimeout={300}
                placeholder="Add Tag"
                onChange={(e) => {
                  setNewQuestionCard({
                    ...newQuestionCard,
                    tags: [...newQuestionCard.tags, e.target.value],
                  });
                }}
              />
              <div className="add">
                <MdAdd />
              </div>
            </div>
          </div>
          <div className="confirmation">
            <button onClick={sendQuestion}>Add</button>
            <button onClick={props.toggleAddQuestion}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
