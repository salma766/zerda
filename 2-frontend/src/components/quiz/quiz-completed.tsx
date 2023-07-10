import React from 'react'

interface QuizCompletedProps {
    score: number
    questionsLength: number
    restart: () => void
}

function QuizCompleted({ score, questionsLength, restart }: QuizCompletedProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className='questionBox'>
            <div className="quizCompleted  has-text-centered">
                <h2 className="quiz-title ">You did {score > 7 ? 'an amazing' : score < 4 ? 'a poor' : 'a good'} job!</h2>
                <p className="quiz-subtitle ">Total score: {score} / {questionsLength}</p>
                <a className="quiz-button " onClick={restart}>
                    restart <i className="fa fa-refresh"></i>
                </a>
            </div>
        </div>)
}

export default QuizCompleted