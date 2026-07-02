import React, { useState } from "react";
import Flashcard from "./components/Flashcard";

const questions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript library",
      "A CSS framework",
      "A database",
      "A programming language"
    ],
    answer: "A JavaScript library"
  },
  {
    id: 2,
    question: "What is JSX?",
    options: [
      "JavaScript XML",
      "Java Syntax",
      "JSON",
      "Java Compiler"
    ],
    answer: "JavaScript XML"
  },
  {
    id: 3,
    question: "What is useState?",
    options: [
      "A React Hook",
      "A CSS property",
      "A Node.js module",
      "A database"
    ],
    answer: "A React Hook"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setKey((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setKey((prev) => prev + 1);
    }
  };

  return (
    <div className="App">
      <Flashcard
        key={key}
        questions={questions}     // Pass the whole array
        currentIndex={currentIndex}
        total={questions.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

export default App;