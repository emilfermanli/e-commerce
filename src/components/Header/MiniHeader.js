import React, { useState } from 'react'
import { Container, Row, Col } from "reactstrap"
import { NavLink } from "react-router-dom"
import dropIcon from "../../assets/img/arrowBottom.svg"
import az from "../../assets/img/flag1.png"
import en from "../../assets/img/flag3.png"
import ru from "../../assets/img/flag2.png"

function MiniHeader() {

    const [dropTwo, setDropTwo] = useState(false)

    const styles = {
        zIndex: "1",
        WebkitTransitionDelay: "0s,0s,0s",
        transitionDelay: "0s,0s,0s",
        opacity: 1,
        visibility: "visible",
        WebkitTransform: "rotateX(0deg)",
        transform: "rotateX(0deg)",
    }


    return (
        <div className="side-header">
            <Container className="h-100">
                <Row className="h-100">
                    <Col lg={6} className="h-100 p-0">
                        <ul className="list-unstyled d-flex align-items-center justify-content-start h-100 mn-menu">
                            <li>
                                <NavLink to="/about-us">
                                    About Us
                               </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact-us">
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/terms">
                                    Terms And Conditions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/faq">
                                    Faq
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/posts">
                                    Posts
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6} className="h-100 p-0">
                        <ul className="list-unstyled d-flex align-items-center justify-content-end h-100">

                            <li onFocus={() => { setDropTwo(!dropTwo) }}
                                onBlur={() => setDropTwo(false)} className="position-relative">
                                <button>
                                    Language:
                                </button>
                                <img style={{ height: "9px" }} src={dropIcon} alt="dropIcon" />
                                <div style={dropTwo ? styles : null} className="dropdown-bar  ">
                                    <ul className="menu">
                                        <li>
                                            <a href="/">
                                                <img style={{ width: "26px", marginRight: "10px" }} src={az} alt="az" />
                                                Az
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img style={{ width: "26px", marginRight: "10px" }} src={ru} alt="ru" />
                                                Ru
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <img style={{ width: "26px", marginRight: "10px" }} src={en} alt="en" />
                                                En
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MiniHeader
