import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
function CardHeader() {
  const [email, setEmail] = useState('');
  const handleChange = event => {
    setEmail(event.target.value);
  };

  const handleClick = event => {
    setEmail (event.target.value);

    if (email.trim().length !== 0) {
      alert('you need to put a valid email.')

    }
    else{
      alert(`Your email (${email}) was submitted`)
    }
  }
  return (
    <div style={{ height: '150vh', overflowY: 'auto' }}>
      <Card>
        <Card.Header>Hello and welcome to my web page!</Card.Header>
        <Card.Body>
          <Card.Text>
            Here you can read my blogs and updates on my work!
          </Card.Text>
        </Card.Body>
      </Card>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Subscribe to mailing list</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Form>
      <div className="d-flex justify-content-center">
        <Image src="https://i.redd.it/jmkebqlq3yx91.gif" />
      </div>
    <div style={{paddingTop: '500px'}}>
      <Card style={{ width: '96rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='text-center'>Veni, vidi, vici</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    </div>
  );
}

export default CardHeader;
