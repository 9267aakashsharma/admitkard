import React, { useState } from "react";
import "./App.scss";
import { v4 as uuid } from "uuid";
import { QuestionCard } from "./shared/components";

export interface QuestionBank {
  id: string;
  question: string;
  topic: string;
  tags?: string[];
}

const apiData: QuestionBank[] = [
  {
    id: uuid(),
    question:
      "What is the qualifying criteria to get admission in Stanford University ?",
    topic: "qualifying-criteria",
    tags: [
      "stanford-university",
      "usa",
      "admission",
      "stanford-university",
      "usa",
    ],
  },
  {
    id: uuid(),
    question: "What are the top engineering colleges in the USA ?",
    topic: "top-colleges",
    tags: ["usa", "engineering", "top"],
  },
  {
    id: uuid(),
    question:
      "What is the qualifying criteria to get admission in Stanford University ?",
    topic: "qualifying-criteria",
    tags: ["stanford-university", "usa", "admission"],
  },
  {
    id: uuid(),
    question: "What are the top engineering colleges in the USA ?",
    topic: "top-colleges",
    tags: ["usa", "engineering", "top"],
  },
  {
    id: uuid(),
    question:
      "What is the qualifying criteria to get admission in Stanford University ?",
    topic: "qualifying-criteria",
    tags: ["stanford-university", "usa", "admission"],
  },
  {
    id: uuid(),
    question: "What are the top engineering colleges in the USA ?",
    topic: "top-colleges",
    tags: ["usa", "engineering", "top"],
  },
];

const App = () => {
  const [questionCards, setQuestionCards] = useState<QuestionBank[]>(apiData);
  return (
    <div className="App">
      <div className="ak-questions-cards-section">
        {questionCards.map((questionCard) => (
          <QuestionCard
            QuestionCardDetails={questionCard}
            key={questionCard.id}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
