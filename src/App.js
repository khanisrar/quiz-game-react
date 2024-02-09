import React, { useState } from 'react';
import Question from './Components/Question';
import Result from './Components/Result';

const data = [
  {
    id: '1',
    que: 'How many states in India?',
    option: ['29', '28', '35', '36'],
    ans: '28'
  },
  {
    id: '2',
    que: 'What is capital of china?',
    option: ['Dhaka', 'New Delhi', 'Colombo', 'Bijing'],
    ans: 'Bijing'
  },
  {
    id: '3',
    que: 'According to area which place of India in the world?',
    option: ['7th', '1st', '3rd', '8th'],
    ans: '7th'
  },
  {
    id: '4',
    que: 'How many ICC trophy India have?',
    option: ['10', '5', '7', '2'],
    ans: '5'
  },
  {
    id: '5',
    que: 'How many star in our solar system?',
    option: ['Infinite', 'In Crore', '1', 'In Lakh'],
    ans: '1'
  }
]


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [sAns, setSAns] = useState();
  const [selectedAnswer, setSelectedAnswer] = useState(
    data ? Array(data.length).fill('') : []
  );

  const hadleAnsClick = (e) => {
    const isCorrect = e === data[currentQuestion].ans;


    const updatedSelectedAnswers = [...selectedAnswer];
    updatedSelectedAnswers[currentQuestion] = e;
    setSelectedAnswer(updatedSelectedAnswers);


    setSAns({
      opt: e,
      isCorrect,
    });

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < data.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1)
      }, 1000);
    } else {
      setTimeout(() => {
        setShowScore(true);
      }, 1000)
    }

  }

  const restart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setSelectedAnswer(data ? Array(data.length).fill('') : []);
  }
  return (
    <>
      {showScore ? (
        <Result
          score={score}
          restart={restart}
          data={data}
          currentQuestion={currentQuestion}
          selectedAnswer={selectedAnswer}
        />

      ) : (
        <Question
          currentQuestion={currentQuestion}
          hadleAnsClick={hadleAnsClick}
          data={data}
          selectedAnswer={selectedAnswer}
          sAns={sAns}
        />
      )
      }

    </>
  );
}

export default App;
