import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Home() {
 
  return (
    <div >
     <Card className="" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Welcome to the Quiz App</Card.Title>
        <Card.Text>
         Test Your knowledge with our fun quizzes!
        </Card.Text>
        <Card.Img variant="top" className="pb-4" src="https://media.istockphoto.com/id/1268465415/photo/quiz-time-concept-speech-bubble-with-pencil-on-yellow-background.jpg?s=612x612&w=0&k=20&c=ZowfYpCJeyknpWhnfyWqV1_If6aJmFUiSqqqEUBhvAg=" />
        <Link to="/quiz">
        <Button variant="primary">Start Quiz</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home