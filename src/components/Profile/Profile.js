import React from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap"

function Profile() {
    return (
        <div className="pt-5 pb-5">
            <Container>
                <Row>
                    <Col className="mb-5" lg={12}><h2 style={{ fontWeight: "bold" }}>My Account</h2></Col>
                    <Col lg={6}>
                        <div className="profile-box profile-login-box">
                            <div className="mb-4">
                                <h3 style={{ fontWeight: "bold" }}>Login</h3>
                            </div>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail9">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail9" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword8">Password</Label>
                                    <Input type="password" name="password" id="examplePassword8" placeholder="password placeholder" />
                                    <a href="/">Forgot password?</a>
                                </FormGroup>
                                <FormGroup className="d-flex align-items-center" style={{ marginBottom: "1rem", height: "46px" }} check>
                                    <Label check>
                                        <Input type="checkbox" />{' '}
                                        Remember Me
                                        </Label>
                                </FormGroup>
                                <button className="custom-button">Submit</button>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="profile-box profile-login-box">
                            <div className="mb-4">
                                <h3 style={{ fontWeight: "bold" }}>Register</h3>
                            </div>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail6">Email</Label>
                                    <Input type="email" name="email" id="exampleEmail6" placeholder="with a placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword1">Password</Label>
                                    <Input type="password" name="password" id="examplePassword1" placeholder="password placeholder" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword2">Password</Label>
                                    <Input type="password" name="password" id="examplePassword2" placeholder="password placeholder" />
                                </FormGroup>
                                <Button color="primary">Submit</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile
