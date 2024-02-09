import React from 'react';
import './App.css';


const Question = ({ currentQuestion, hadleAnsClick, data, sAns }) => {
    return (
        <>
            <div className="container">
                <h1>Quiz Game</h1>
                <h3 className="que">{data[currentQuestion].que}</h3>
                <div className="option-container">
                    {data[currentQuestion].option.map((opt, index) => (
                        <div style={{
                            backgroundColor:
                                sAns && sAns.opt === opt
                                    ? sAns.isCorrect
                                        ? '#47a847'
                                        : '#dd4141'
                                    : '',
                        }}
                            key={index}
                            onClick={() => hadleAnsClick(opt)}
                            className="option"> <span>{index + 1} </span>{opt}
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Question;