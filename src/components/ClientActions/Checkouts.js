import React from 'react'
import { Container, Row, Col, Label, Form, FormGroup, Input, Button } from 'reactstrap'
import { Link } from "react-router-dom"

function Checkouts() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="mb-5 mt-5" lg={12}><h2 style={{ fontWeight: "bold" }}>Checkout</h2></Col>
                    <Col lg={7}>
                        <div className="profile-box-body checkout">
                            <div style={{ marginBottom: "1.75rem" }}>
                                <h3 className="font-weight-bold">Billing details</h3>
                            </div>
                            <Form>
                                <div className="d-flex justify-content-between">
                                    <FormGroup>
                                        <Label for="examplePassword55">First Name</Label>
                                        <Input className="edit-info check" type="text" name="name" id="examplePassword55" placeholder="First Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword1">Last Name</Label>
                                        <Input className="edit-info check" type="text" name="surname" id="examplePassword1" placeholder="Last Name" />
                                    </FormGroup>
                                </div>
                                <FormGroup>
                                    <Label for="examplePassword2">Company Name </Label>
                                    <Input type="text" name="mail" id="examplePassword2" placeholder="Email Address" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect3">Country</Label>
                                    <Input type="select" name="select" id="exampleSelect3">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword4">Street Address</Label>
                                    <Input type="text" name="mail" id="examplePassword4" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword5">Apartment, suite, unit etc.</Label>
                                    <Input type="text" name="mail" id="examplePassword5" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword6">Town / City</Label>
                                    <Input type="text" name="mail" id="examplePassword6" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword7">State / County</Label>
                                    <Input type="text" name="mail" id="examplePassword7" placeholder="Phone Number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword8">Postcode / ZIP</Label>
                                    <Input type="text" name="mail" id="examplePassword8" placeholder="Phone Number" />
                                </FormGroup>
                                <div className="d-flex justify-content-between">
                                    <FormGroup>
                                        <Label for="examplePassword9">Email address</Label>
                                        <Input className="edit-info " type="text" name="name" id="examplePassword9" placeholder="First Name" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword01">Phone</Label>
                                        <Input className="edit-info " type="text" name="surname" id="examplePassword01" placeholder="Last Name" />
                                    </FormGroup>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="profile-box-body checkout">
                            <div style={{ marginBottom: "1.75rem" }}>
                                <h3 className="font-weight-bold">Your order</h3>
                            </div>
                            <div>
                                <ul className="order-list">
                                    <li className="order-line"><span>Product</span><span>Total</span></li>
                                    <li><span>Water Hose 40cm <span>x 1</span></span><span>£15.00</span></li>
                                    <li><span>Water Hose 40cm <span>x 5</span></span><span>£15.00</span></li>
                                    <li><span>Water Hose 40cm <span>x 2</span></span><span>£15.00</span></li>
                                    <li><span>Water Hose 40cm <span>x 1</span></span><span>£15.00</span></li>
                                </ul>
                            </div>
                            <div className="order-price">
                                <ul>
                                    <li>
                                        <span>Subtotal</span>
                                        <span>£7783.00</span>
                                    </li>
                                    <li>
                                        <span>Shipping</span>
                                        <span>£25.00</span>
                                    </li>
                                    <li>
                                        <span>Tax</span>
                                        <span>£0.00</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>Total</h4>
                                <h5>£7808.00</h5>
                            </div>
                            <div className="d-flex">
                                <input style={{ width: "auto", marginTop: "5px", marginRight: "5px" }} type="checkbox" />
                                <p>I have read and agree to the website <Link to="/terms">terms and conditions</Link></p>
                            </div>
                            <div className="cart-action">
                                <Button className="order-btn custom-btn checkout-btn">Place Order</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Checkouts
