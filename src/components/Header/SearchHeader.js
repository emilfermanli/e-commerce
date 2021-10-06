import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import logo from "../../assets/img/logo.png"
import search from "../../assets/img/search.svg"
import { NavLink } from 'react-router-dom'

function SearchHeader() {

    const [inputColor, setInputColor] = useState(false)

    const styles = {
        border: "2px solid #1a66ff"
    }



    return (
        <div className="middle-header">
            <Container>
                <Row className="align-items-center">
                    <Col lg={3}>
                        <NavLink to="/">
                            <img width="100%" height="50" src={logo} alt="logo" />
                        </NavLink>
                    </Col>
                    <Col lg={7}>
                        <div style={inputColor ? styles : null} className="search-bar">
                            <form style={{
                                "height": "42px",
                                "display": "flex"
                            }}>
                                <input placeholder="Search..."
                                    onFocus={() => { setInputColor(true) }}
                                    onBlur={() => setInputColor(false)}
                                    type="search" />
                                <button className="search-btn">
                                    <img src={search} alt="search" />
                                </button>
                            </form>
                        </div>
                    </Col>
                    <Col lg={2} className="d-flex flex-column align-items-center">
                        <div className="mini-text">
                            <span>Customer Service</span>
                        </div>
                        <div className="big-text">
                            <span>(+994) 999-9999</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SearchHeader
