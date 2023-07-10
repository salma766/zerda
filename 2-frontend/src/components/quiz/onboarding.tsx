import React from 'react'

interface OnBoardingProps {
    startQuiz: () => void
    quizReady: boolean
}

function OnBoarding({ startQuiz, quizReady }: OnBoardingProps) {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className='questionBox'>
            <div className="quizCompleted  has-text-centered">
                <h2 className="quiz-title ">On boarding</h2>
                <p className="quiz-subtitle ">description</p>
                <button disabled={!quizReady} className="quiz-button " onClick={startQuiz}>
                    {(!quizReady) ? "loading" : "Start Quiz"}
                </button>
            </div>
        </div>
    )
}

export default OnBoarding