import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function Faq() {
    return (
        <Container>
            <Row>
                <Col className="mb-5 pt-5" lg={12}>
                    <h2 style={{ fontWeight: "bold", fontSize: "36px", }}>
                        Frequently Asked Questions
                    </h2>
                </Col>
                <Col lg={12}>
                    <h3 className="font-weight-bold mb-3">
                        Payment Information
                    </h3>
                    <div style={{ flexWrap: "wrap" }} className="faq-box">
                        <Col lg={6}>
                            <h5 className="font-weight-bold">What shipping methods are available?</h5>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </Col>
                        <Col lg={6}>
                            <h5 className="font-weight-bold">What shipping methods are available?</h5>
                            <p>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Faq
