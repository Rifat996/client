import React, { useState, useEffect } from 'react';
import { InputGroup, Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

export default function App2() {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState({
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,
    num6: 0,
    num7: 0,
    num8: 0,
    num9: 0,
    num10: 0,
  });

  const handleSortNumbers = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/sort', {
      numbers : [
        number.num1,
        number.num2,
        number.num3,
        number.num4,
        number.num5,
        number.num6,
        number.num7,
        number.num8,
        number.num9,
        number.num10,
      ]
    })
    .then(res => {
      console.log(res.data);
      setNumbers([...numbers, res.data]);
      setNumber({ num1: 0, num2: 0, num3: 0, num4: 0, num5: 0, num6: 0, num7: 0, num8: 0, num9: 0, num10: 0 });
    })
      .catch(err => console.error('There was an error: ', err));
    }

    const fillRandomData = (e) => {
      setNumber({
        num1: Math.floor(Math.random() * 100),
        num2: Math.floor(Math.random() * 100),
        num3: Math.floor(Math.random() * 100),
        num4: Math.floor(Math.random() * 100),
        num5: Math.floor(Math.random() * 100),
        num6: Math.floor(Math.random() * 100),
        num7: Math.floor(Math.random() * 100),
        num8: Math.floor(Math.random() * 100),
        num9: Math.floor(Math.random() * 100),
        num10: Math.floor(Math.random() * 100),
      })
    }
    

  return (
    <>

      <Container className='mt-5'>
        <Row className='text-center'>
          <Col>
            <h2>Enter or fill fields with random data</h2>
          </Col>
        </Row>
        <Row className='mt-5'>
          <InputGroup className="mb-3">

            <Form.Control
              type='number'
              value={number.num1}
              onChange={e => setNumber({ ...number, num1: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num2}
              onChange={e => setNumber({ ...number, num2: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num3}
              onChange={e => setNumber({ ...number, num3: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num4}
              onChange={e => setNumber({ ...number, num4: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num5}
              onChange={e => setNumber({ ...number, num5: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num6}
              onChange={e => setNumber({ ...number, num6: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num7}
              onChange={e => setNumber({ ...number, num7: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num8}
              onChange={e => setNumber({ ...number, num8: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num9}
              onChange={e => setNumber({ ...number, num9: e.target.value })}
            />
            <Form.Control
              type='number'
              value={number.num10}
              onChange={e => setNumber({ ...number, num10: e.target.value })}
            />
          </InputGroup>
          <Row className='text-center'>
            <Col>
            <Button
              type='submit'
              onClick={handleSortNumbers}
            >Sort Data</Button>
            </Col>
            <Col>
            <Button
              type='submit'
              onClick={fillRandomData}
            >Fill random data</Button>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container>
        <Row className='mt-5'>
          <Col>
            <h5>Additional Filter</h5>
          </Col>
        </Row>
        <Row>
        <InputGroup className="mb-3" style={{ maxWidth: '200px' }}>
        <Form.Control aria-label="Text input with checkbox" />
        <Form.Control aria-label="Text input with checkbox" />
        <InputGroup.Checkbox aria-label="Checkbox for following text input" />

      </InputGroup>
        </Row>
          <Row className='text-center'>
            <h2>Results: </h2>
          </Row>
        {numbers.map((number, index) => (
          <Row key={index} className='text-center'>
                  {number.map((num, index) => (
                    <Col xl={1} key={index} className='text-center'>
                    <Card className={`p-2 ${isPrime(num) ? 'bg-primary' : ''}`}>
                    <Card.Title>{num}</Card.Title>
                    </Card>
                    </Col>
                  ))}
            
            </Row>
        ))}
          
        
      </Container>

    </>
  )
}
