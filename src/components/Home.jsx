import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Home() {



    return (



        <Container className="my-5">
            <h5 className="my-5 text-center display-4">Welcome to Mallu's Food Court</h5>
            <Row>

                <Col md={4}>
                    <Card style={{ marginBottom: '30px' }}>
                        <Card.Img src="/images/food1.jpg" style={{ height: '270px'}}  />
                        <Card.Body>
                            <Card.Title>Family Meal</Card.Title>
                            <Card.Text>
                                Here's some Family Meal
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button className="ms-3">View Details</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ marginBottom: '30px' }}>
                        <Card.Img src="/images/nonveg.jpg" style={{ height: '270px' }} />
                        <Card.Body>
                            <Card.Title>Non-Veg</Card.Title>
                            <Card.Text>
                                Here's some Non Veg Items
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button className="ms-3">View Details</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ marginBottom: '30px' }}>
                        <Card.Img src="/images/veg.jpg" />
                        <Card.Body>
                            <Card.Title>Veg</Card.Title>
                            <Card.Text>
                                Here's some Veg Items
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                                <Button className="ms-3">View Details</Button>

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>


    );
}

export default Home;