import React, { useState } from "react";

const Flashcard = ({ questions, onPrev, onNext, currentIndex, total }) => {
  const [flipped, setFlipped] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (option) => {
    setSelected(option);
    setFlipped(true);
  };

  const currentQuestion = questions[currentIndex];

  return (
    <>
      <h1>Flashcard Quiz</h1>

      <div className="card-container">
        <div className={`card ${flipped ? "flipped" : ""}`}>
          {/* Front */}
          <div className="card-face front">
            <h3>{currentQuestion.question}</h3>

            <ul>
              {currentQuestion.options.map((opt) => (
                <li
                  key={opt}
                  className={selected === opt ? "selected" : ""}
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>

          {/* Back */}
          <div className="card-face back">
            <h4>Correct Answer:</h4>

            <p
              className={
                selected === currentQuestion.answer ? "correct" : "wrong"
              }
            >
              {currentQuestion.answer}
            </p>
          </div>
        </div>

        <div className="navigation">
          <button onClick={onPrev} disabled={currentIndex === 0}>
            Prev
          </button>

          <span>
            {currentIndex + 1}/{total}
          </span>

          <button
            onClick={onNext}
            disabled={currentIndex === total - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Flashcard;