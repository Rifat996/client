import React from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

// determine if a number is prime
const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return false;
    }
    return number > 1;
}

const InputResults = ({ numbers, filterCriteria, setFilterCriteria, error }) => {

    const handleFilterChange = (e) => {
        const { name, value, checked } = e.target;
        setFilterCriteria({
            ...filterCriteria,
            [name]: name === 'isActive' ? checked : name === 'value' ? Number(value) : value,
        });
    };

    const applyFilter = (number) => {
        if (!filterCriteria.isActive) return true;

        const {operator, value} = filterCriteria;
        switch (operator) {
            case '<': return number < value;
            case '>': return number > value;
            case '=': return number === value;
            default: return true;
        }
    };





    return (
        <Container className='mt-5'>
            <Row className='mb-5'>
                <Col xs={1}>
                    <Form.Control 
                    as='select' 
                    name='operator' 
                    value={filterCriteria.operator}
                    onChange={handleFilterChange}
                    className='text-center'
                    >
                        <option value='<'>{"<"}</option>
                        <option value='>'>{">"}</option>
                        <option value='='>{"="}</option>

                    </Form.Control>
                </Col>
                <Col xs={1}>
                    <Form.Control 
                    type="number" 
                    name="value" value={filterCriteria.value} 
                    onChange={handleFilterChange}
                    className='text-center'
                    />
                </Col>
                <Col xs={2}>
                    <Form.Check
                        type="checkbox"
                        label="Apply Filter"
                        name='isActive'
                        checked={filterCriteria.isActive}
                        onChange={handleFilterChange}
                    />
                </Col>
            </Row>
            <hr />
            <Row className='mb-3'>
                    <Col className='text-center'>
                        <h3><strong>Results</strong></h3>
                    </Col>
                </Row>
            <Row className="justify-content-center">
                {Object.values(numbers)
                    .filter(applyFilter)
                    .map((number, index) => (
                        <Col key={index} xs={4} md={2} xl={1}>
                            <Card className={`p-2 m-1 text-center ${isPrime(number) ? 'bg-success text-white' : ''}`}>
                                <Card.Body>{number}</Card.Body><hr />
                            </Card>
                        </Col>
                    ))}
            </Row>
            <Row className='mt-5'>
                <Col className='text-center'>
                {error && <h3 className="alert alert-danger">{error}</h3>}
                </Col>
            </Row>
        </Container>
    );
}

export default InputResults;
