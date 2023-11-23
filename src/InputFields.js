import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';



export default function InputFields({ numbers, setNumbers, error, setError }) {
   

    // function to handle input change
    const handleChange = (e) => {
        e.preventDefault();
        if (numbers.one <= 0 || numbers.two <= 0 || numbers.three <= 0 || numbers.four <= 0 || numbers.five <= 0 || numbers.six <= 0 || numbers.seven <= 0 || numbers.eight <= 0 || numbers.nine <= 0 || numbers.ten <= 0) {
            setError('Please enter positive numbers');
            
            return;
        } else {
            setError('');
        }

        axios.post('http://localhost:5000/api/sort', numbers)
            .then(res => {
                console.log(res.data);
                setNumbers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const randomizeNumbers = (e) => {
        setNumbers({
            one: Math.floor(Math.random() * 100),
            two: Math.floor(Math.random() * 100),
            three: Math.floor(Math.random() * 100),
            four: Math.floor(Math.random() * 100),
            five: Math.floor(Math.random() * 100),
            six: Math.floor(Math.random() * 100),
            seven: Math.floor(Math.random() * 100),
            eight: Math.floor(Math.random() * 100),
            nine: Math.floor(Math.random() * 100),
            ten: Math.floor(Math.random() * 100),
        });
    }


    return (
        <>
            <Container className='mt-5'>
                <Row className='mb-3'>
                    <Col className='text-center'>
                        <h3><strong>Enter or fill fields with random data</strong></h3>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.one}
                        onChange={(e) => setNumbers({ ...numbers, one: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.two}
                        onChange={(e) => setNumbers({ ...numbers, two: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.three}
                        onChange={(e) => setNumbers({ ...numbers, three: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.four}
                        onChange={(e) => setNumbers({ ...numbers, four: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.five}
                        onChange={(e) => setNumbers({ ...numbers, five: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.six}
                        onChange={(e) => setNumbers({ ...numbers, six: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.seven}
                        onChange={(e) => setNumbers({ ...numbers, seven: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.eight}
                        onChange={(e) => setNumbers({ ...numbers, eight: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.nine}
                        onChange={(e) => setNumbers({ ...numbers, nine: Number(e.target.value) })}

                    /></Col>
                    <Col><Form.Control
                        type='number'
                        className='m-1 text-center'
                        value={numbers.ten}
                        onChange={(e) => setNumbers({ ...numbers, ten: Number(e.target.value) })}

                    /></Col>
                </Row>
                <Row className="text-center my-5 justify-content-center">
                    <Col xs={4} md={3} lg={2}>
                        <Button
                        variant='secondary'
                        onClick={handleChange}
                        >Sort numbers</Button>
                    </Col>
                    <Col xs={4} md={3} lg={2}>
                        <Button
                        variant='secondary'
                        onClick={randomizeNumbers}
                        >Randomize numbers</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
