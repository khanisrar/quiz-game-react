import React from 'react';
import './App.css';

const Result = ({ score, restart, data, selectedAnswer }) => {
    return (
        <>
            <div className="result">
                <h2> Scored : {score} / {data.length}</h2>
                <button onClick={restart}>Play Again</button>
                <div className="result-details">
                    {data.map((question, index) => (
                        <div key={index} className={`question-result ${selectedAnswer[index] === question.ans ? 'correct' : 'wrong'}`}>
                            <p>
                                <strong>Question {index + 1}:</strong> {question.que}
                            </p>
                            <p>
                                <strong>Selected Ans:</strong> {selectedAnswer[index]}
                            </p>
                            <p>
                                <strong>Right Ans:</strong> {question.ans}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Result;