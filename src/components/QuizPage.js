import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function QuizPage({ quizData }) {
    const { bookTitle } = useParams();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuizSet, setCurrentQuizSet] = useState([]);

    useEffect(() => {
        if (quizData[bookTitle]) {
            setCurrentQuizSet(quizData[bookTitle]);
        }
    }, [bookTitle, quizData]);

    const question = currentQuizSet[currentQuestionIndex];

    const handleAnswerSubmit = () => {
        if (question && question.answer === userAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < currentQuizSet.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer('');
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return <div>퀴즈 완료! 당신의 점수는: {score}/{currentQuizSet.length}</div>;
    }

    return (
        <div>
            <div>{question && question.question}</div>
            <div>
                {question && question.options.map(option => (
                    <button key={option} onClick={() => setUserAnswer(option)}>
                        {option}
                    </button>    
                ))}
            </div>
            <button onClick={handleAnswerSubmit}>다음</button>
        </div>
    );
}

export default QuizPage;
