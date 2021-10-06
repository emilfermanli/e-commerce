import React from 'react'
import { Container, Row, Col } from "reactstrap"
import { Form, FormGroup, Label, Input } from 'reactstrap';


function ContactUs() {


    return (
        <Container>
            <Row>
                <Col className="mb-5 pt-5" lg={12}>
                    <h2 style={{ fontWeight: "bold", fontSize: "36px", }}>
                        Contact Us
                        </h2>
                </Col>
                <Col lg={12}>
                    <div style={{ height: '100vh', width: '100%' }}>
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.4776411533397!2d49.86092282917726!3d40.41083201984881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzM5LjAiTiA0OcKwNTEnNDEuMyJF!5e0!3m2!1str!2s!4v1591791484952!5m2!1str!2s" width="100%" height="100%" frameBorder="0" style={{ border: "0" }} allowFullScreen="" aria-hidden="false" tabIndex="0" />
                    </div>
                    <div style={{ flexWrap: "wrap" }} className="d-flex profile-box-body contact">
                        <Col lg={6}>
                            <h3>Our Adress</h3>
                            <div>
                                <ul className="contact-adress">
                                    <li>
                                        <span>A.Y Plaza Biznes Center, Əhməd Rəcəbli, Bakı, Azerbaycan</span>
                                        <br />
                                        <span>Email: stroyka@example.com</span>
                                        <br />
                                        <span>Phone Number: 999-99-99</span>
                                    </li>
                                    <li>
                                        <span><strong>Opening Hours</strong></span>
                                        <br />
                                        <span>Monday to Friday: 8am-8pm</span>
                                        <br />
                                        <span>Saturday: 8am-6pm</span>
                                        <br />
                                        <span>Sunday: 10am-4pm</span>
                                    </li>
                                    <li>
                                        <span><strong>Comment</strong></span>
                                        <br />
                                        <span>
                                            Comment
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <h3>Leave us a Message</h3>
                            <div>
                                <Form>
                                    <div className="d-flex justify-content-between">
                                        <FormGroup>
                                            <Label for="exampleEmail">Your Name</Label>
                                            <Input style={{ padding: "0.375rem 1.75rem" }} type="text" name="email" id="exampleEmail" placeholder="Your Name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="examplePassword2">Email</Label>
                                            <Input style={{ padding: "0.375rem 1.75rem" }} type="email" name="password" id="examplePassword2" placeholder="Email" />
                                        </FormGroup>
                                    </div>
                                    <FormGroup>
                                        <Label for="examplePassword3">Subject</Label>
                                        <Input type="text" name="password" id="examplePassword3" placeholder="Subject" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Text Area</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                    <button className="custom-button">Send Message</button>
                                </Form>
                            </div>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactUs
