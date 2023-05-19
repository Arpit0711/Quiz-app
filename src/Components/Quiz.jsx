import React, { useContext, useState,useEffect } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import { MyContext } from "..";
import {useNavigate} from 'react-router-dom'

function Quiz({currentScore,setCurrentScore}) {
    const navigate = useNavigate()
  const quizData = useContext(MyContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
 
  const [counter ,setCounter] = useState(60);

     useEffect(()=>{
        const timer= counter > 0 && setInterval(()=> setCounter(counter - 1),1000)
        return () => clearInterval(timer);
     },[counter])

  const handleClick = (answerIndex) => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    }

    if (answerIndex === quizData[currentQuestion].answerIndex) {
      setCurrentScore(currentScore + 1);
    }
    
    if(currentQuestion + 1 === quizData.length){
        navigate('/finish')
    }
  };
  return (
    <div>
      <Card border="primary" style={{ width: "30rem" }}>
        <Card.Header className="d-flex justify-content-between">
          <Badge bg="success">Q.No {quizData[currentQuestion].questionNo}/3</Badge>
          <Badge bg="danger">{counter}</Badge>
        </Card.Header>
        <Card.Body>
          <Card.Header>{quizData[currentQuestion].question}</Card.Header>
          <Card.Text>
            <ListGroup as="ol" numbered>
              {quizData[currentQuestion].options.map((option, index) => (
                <>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start "
                    role="button"
                    key={index}
                    onClick={() => handleClick(index)} 
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold ">{option}</div>
                    </div>
                  </ListGroup.Item>
                  <br />
                </>
              ))}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Quiz;
