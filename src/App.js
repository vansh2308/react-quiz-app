import { useState } from 'react';
import './App.css';

function App() {
  // eslint-disable-next-line 
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currQuestion, setCurrQuestion] = useState(0);
  // eslint-disable-next-line
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnsClick = (check)=>{
    if(check){
      console.log(check);
      const new_score = score+10;
      setScore(new_score);
    }
    if(currQuestion+1<questions.length){
      const new_question = currQuestion+1;
      setCurrQuestion(new_question);
    }
    else{
      setIsSubmitted(true);
    }
  }

  function resetHandler(){
    setCurrQuestion(0);
    setScore(0);
    setIsSubmitted(false);
  }

  return (
    <>
    <div className='statusbar'> 
      <div className='status' style={{width: `${(1+currQuestion)*25}%`}}></div>
      
    </div>
    <div className='container'>
      {isSubmitted ? (
          <div className = "score-cont">
          <div > Your score is {score}/40</div>
          <button style={{margin: "30px"}} onClick = {resetHandler}> Reset </button>
          </div>
          ) :
         (<>
          <div className='que-cont'>
            <h1>Question {currQuestion+1}/4</h1>
            <div className='question-txt' style={{margin: "20px 0"}}>
              {questions[currQuestion].questionText}
            </div>
          </div>
          <div className='ans-cont'>
            {questions[currQuestion].answerOptions.map((answer)=>{
              return(
                <button onClick={()=>handleAnsClick(answer.isCorrect)}> {answer.answerText} </button>
              )
            })}
          </div> 
          </>)}
    </div>
    </>
  );
}

export default App;
