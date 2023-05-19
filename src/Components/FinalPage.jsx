import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function FinalPage({currentScore}) {
  return (
    <div>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/655254230/vector/trophy-cup-icon.jpg?s=612x612&w=0&k=20&c=ScSSWWysiBHe85N0deb42VG_y5it-GTBDfMP36UiuBI=" />
      <Card.Body>
        <Card.Title>Congratulations!</Card.Title>
        <Card.Text>
          You scored {currentScore} / 3
        </Card.Text>
        <Link to={'/quiz'}>
        <Button variant="primary">Start Again</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default FinalPage