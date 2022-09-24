import { GetStaticProps } from 'next';
import { useState } from 'react';
import { getQuizData } from '../lib/quiz';
import styles from "../styles/Quiz.module.css";
import QuizData from '../types/Quiz';

export default function Quiz({ quizData }: { quizData?: QuizData[] }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    if (quizData === undefined) {
        console.log("Na super");
        return <div></div>;
    }
    else{
        console.log("Super");
        console.log(typeof(quizData));
        console.log("length", quizData.at(0)?.answers);
    }

    const handleAnswerOptionClick = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion: number = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <main className={styles.main}>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {quizData.length}
                </div>
            ) : (
                <>
                    <div className={styles.questionsection}>
                        <div className={styles.questioncount}>Question {currentQuestion + 1}/{quizData.length}</div>
                        <div className={styles.questiontext}>{quizData[currentQuestion].question}</div>
                    </div>
                    <div className={styles.answers}>
                        {quizData[currentQuestion].answers.map((answerOption) => (
                            <button className={styles.button} key={"question" + answerOption.id} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.text}</button>
                        ))}
                    </div>
                </>
            )}
        </main>
    )
}