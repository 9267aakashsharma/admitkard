import React, { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { MdAdd } from "react-icons/md";
import { QuestionBank } from "../../../App";
import { v4 as uuid } from "uuid";
import "./AddQuestion.scss";
import QuestionCard from "../QuestionCard/QuestionCard";

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
  const [tag, setTag] = useState<string>("");

  useEffect(() => {
    setTag("");
  }, [newQuestionCard]);

  const sendQuestion = () => {
    props.addQuestion(newQuestionCard);
    props.toggleAddQuestion();
    setNewQuestionCard({
      id: uuid(),
      question: "",
      topic: "",
      tags: [],
    });
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
          <div className="preview">
            <h3>Preview</h3>
            <QuestionCard
              QuestionCardDetails={newQuestionCard}
              deleteQuestionCards={() => {
                setNewQuestionCard({
                  id: uuid(),
                  question: "",
                  topic: "",
                  tags: [],
                });
              }}
            />
          </div>
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
              }}
            />
          </div>
          <div className="add-tags">
            <div className="tags">
              <DebounceInput
                debounceTimeout={300}
                placeholder="Add Tag"
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value);
                }}
              />
              <div
                className="add"
                onClick={() => {
                  setNewQuestionCard({
                    ...newQuestionCard,
                    tags: [...newQuestionCard.tags, tag],
                  });
                }}
              >
                <MdAdd />
              </div>
            </div>
          </div>
          <div className="confirmation">
            <button
              onClick={sendQuestion}
              disabled={
                newQuestionCard.question.length > 0 &&
                newQuestionCard.tags.length > 0 &&
                newQuestionCard.tags.length > 0
                  ? false
                  : true
              }
            >
              Add
            </button>
            <button onClick={props.toggleAddQuestion}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
