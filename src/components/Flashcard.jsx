import React from 'react'

const Flashcard = ({question}) => {
  return (
    <>
 <h1>Flashcard Quiz</h1>
    <div className='card-container'>
        <div className={`card ${flipped ? "flipped" : ""}`}>
            <div className='card-face front'>
                <h3>{questions.question}</h3> 
                <ul>
                    {
                        question.options.map((opt)=>(
                            <li>
                                key={opt}
                                className={selected === opt ? "selected"}
                            </li>

                        ))
                    }
                </ul>

            </div>
        </div>
      
    </div>
    </>
  )
}

export default Flashcard
