import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import teammate1 from "../../assets/img/teammate-1.jpg"
import teammate2 from "../../assets/img/teammate-2.jpg"
import teammate3 from "../../assets/img/teammate-3.jpg"
import { NavLink } from "react-router-dom"

function AboutUs() {



    return (
        <div>
            <div className="big-img">

            </div>
            <Container className="d-flex justify-content-center" fluid={false}>
                <div className="about-us-info">
                    <h3 className="about-us-title">
                        About Us
                    </h3>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus metus, convallis ut leo nec, tincidunt eleifend justo. Ut felis orci, hendrerit a pulvinar et, gravida ac lorem. Sed vitae molestie sapien, at sollicitudin tortor.
                        </p>
                        <br />
                        <p>
                            Duis id volutpat libero, id vestibulum purus.Donec euismod accumsan felis,egestas lobortis velit tempor vitae. Integer eget velit fermentum, dignissim odio non, bibendum velit.z
                        </p>
                    </div>
                    <div className="meet-team">
                        <h3 className="about-us-title">
                            Meet Our Team
                        </h3>
                        <div className="mb-5">
                            <span>
                                Want to work in our friendly team?
                            </span>
                            <br />
                            <span>
                                <NavLink to="/contact-us">Contact us</NavLink> and we will consider your candidacy.
                            </span>
                        </div>
                        <Row>
                            <Col lg={4}>
                                <div className="w-100">
                                    <img className="w-100" src={teammate1} alt="teammate" />
                                </div>
                                <div>
                                    <h5>Firstname Surname</h5>
                                    <h6>
                                        Position
                                    </h6>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="w-100">
                                    <img className="w-100" src={teammate2} alt="teammate" />
                                </div>
                                <div>
                                    <h5>Firstname Surname</h5>
                                    <h6>
                                        Position
                                    </h6>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="w-100">
                                    <img className="w-100" src={teammate3} alt="teammate" />
                                </div>
                                <div>
                                    <h5>Firstname Surname</h5>
                                    <h6>
                                        Position
                                    </h6>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutUs
