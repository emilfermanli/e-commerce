import React from 'react'
import { Container, Row, Col } from 'reactstrap'

function TermsConditions() {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="terms-conditions">
                        <div className="text-center term-header">
                            <h1 className="font-weight-bold">Terms And Conditions</h1>
                            <span>This Agreement was last modified on 27 May 2018.</span>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. Suspendisse potenti. Pellentesque et molestie ante. In feugiat ante vitae ultricies malesuada.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TermsConditions
