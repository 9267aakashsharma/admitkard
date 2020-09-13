import React, { useState } from "react";
import "./App.scss";
import { v4 as uuid } from "uuid";
import { QuestionCard, Searchbar } from "./shared/components";

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
    tags: ["usa", "engineering", "top", "abc"],
  },
];

const App = () => {
  const [questionCards, setQuestionCards] = useState<QuestionBank[]>(apiData);
  const [searchText, setSearchText] = useState<string>("");

  const deleteQuestionCards = (id: string) => {
    let tempCards = [...questionCards];
    let deletedCardId = tempCards.findIndex((card) => card.id === id);
    if (deletedCardId !== -1) {
      tempCards.splice(deletedCardId, 1);
      setQuestionCards(tempCards);
    }
  };

  return (
    <div className="App">
      <Searchbar searchText={searchText} setSearchText={setSearchText} />
      <div className="ak-questions-cards-section">
        {questionCards
          .filter((questionCard) => {
            if (searchText === "") return true;
            else {
              return (
                questionCard.question
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                questionCard.tags?.includes(searchText)
              );
            }
          })
          .map((questionCard) => (
            <QuestionCard
              QuestionCardDetails={questionCard}
              key={questionCard.id}
              deleteQuestionCards={deleteQuestionCards}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
