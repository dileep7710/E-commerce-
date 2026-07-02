import React, { useState } from 'react'
import Flashcard from './components/Flashcard'

// Temporary questions data to avoid undefined reference
const questions = [
  { question: 'What is React?', answer: 'A JavaScript library for building UIs' },
  { question: 'What is a component?', answer: 'Reusable piece of UI' }
]

const App = () =>{
  const [currentIndex,setCurrentIndex] = useState(0);
  const [key,setKey] = useState(0);

  const handleNext = () =>{
    if(currentIndex < questions.length - 1){
      setCurrentIndex(currentIndex + 1);
      setKey(prev => prev + 1)
    }
  }

  const handlePrev = () =>{
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1);
      setKey(prev => prev + 1)
    }
  }
  return (
    <div className='App'>
      <Flashcard
      key={key}
      question={questions[currentIndex]}
      currentIndex={currentIndex}
      total={questions.length}
      onNext={handleNext}
      onPrev={handlePrev}
      />
      
    </div>
  )
}

export default App
