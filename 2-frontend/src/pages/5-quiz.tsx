import { useState, useEffect } from 'react'



import '../stylesheets/quiz.css'
import { INIT_QUIZ } from '../config';
import { QuizModel } from '../models/quiz-model';
import OnBoarding from '../components/quiz/onboarding';
import QuizCompleted from '../components/quiz/quiz-completed';
import { useStore } from 'zustand';
import { quizStore } from '../stores/quiz-store';
import { useParams } from 'react-router-dom';

function Quiz() {

    const [quiz, setQuiz] = useState<QuizModel>(INIT_QUIZ)
    const { fetchQuiz } = useStore(quizStore)
    const { id } = useParams()

    const [beginQuiz, setBeginQuiz] = useState(false)
    const [questionIndex, setQuestionIndex] = useState(0);
    const [userResponses, setUserResponses] = useState<any[]>([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await fetchQuiz(id!)
        if (response) {
            setQuiz(response)
            setUserResponses(Array(quiz.questions.length).fill(null));
        } else {
            alert('an error occured')
        }
    }


    const selectOption = (index: number) => {
        setUserResponses(prevResponses => {
            const newResponses = [...prevResponses];
            newResponses[questionIndex] = index;
            return newResponses;
        });
    };

    const next = () => {
        if (questionIndex < quiz.questions.length) {
            setQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    const prev = () => {
        if (questionIndex > 0) {
            setQuestionIndex(prevIndex => prevIndex - 1);
        }
    };

    const restart = () => {
        setQuestionIndex(0);
        setUserResponses(Array(quiz.questions.length).fill(null));
    };

    const score = () => {
        let score = 0;
        for (let i = 0; i < userResponses.length; i++) {
            if (
                userResponses[i] !== null &&
                quiz.questions[i].reponses[userResponses[i]].correct
            ) {
                score++;
            }
        }
        return score;
    };
    return (
        <>


            <div className="quiz-container">
                {beginQuiz === false
                    ? <OnBoarding
                        quizReady={quiz._id !== ""}
                        startQuiz={() => setBeginQuiz(true)}
                    />
                    : questionIndex < quiz.questions.length ? (
                        <div className="questionBox">
                            <div className="questionContainer">
                                <header>
                                    <h1 className="title is-6">{quiz.title}</h1>
                                    <div className="progressContainer">
                                        <progress className="progress is-info is-small quiz-progress" value={(questionIndex / quiz.questions.length) * 100} max="100">
                                            {(questionIndex / quiz.questions.length) * 100}%
                                        </progress>
                                        <p>{(questionIndex / quiz.questions.length) * 100}% complete</p>
                                    </div>
                                </header>
                                <h2 className="titleContainer title">{quiz.questions[questionIndex].text}</h2>
                                <div className="optionContainer">
                                    {quiz.questions[questionIndex].reponses.map((response, index) => (
                                        <div className={`option  ${userResponses[questionIndex] === index ? 'is-selected' : ''}`} onClick={() => selectOption(index)} key={index}>
                                            {String.fromCharCode(97 + index)}. {response.text}
                                        </div>
                                    ))}
                                </div>
                                <footer className="questionFooter">
                                    <nav role="navigation" aria-label="pagination" className="quiz-pagination">
                                        <button onClick={prev} disabled={questionIndex < 1} className="quiz-button">
                                            Back
                                        </button>
                                        <button className={`quiz-button ${userResponses[questionIndex] === null ? '' : 'is-active'}`} onClick={next} disabled={questionIndex >= quiz.questions.length}>
                                            {questionIndex === quiz.questions.length - 1 ? 'Finish' : 'Next'}
                                        </button>
                                    </nav>
                                </footer>
                            </div>
                        </div>
                    ) : <QuizCompleted
                        score={score()}
                        restart={restart}
                        questionsLength={quiz.questions.length}
                    />




                }

            </div>
        </>
    )
}

export default Quiz