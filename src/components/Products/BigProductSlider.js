import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

function BigProductSlider() {
    return (
        <div className="mb-5">
            <Container>
                <Row>
                    <Col className="mt-3" lg={{ size: 9, offset: 3 }}>
                        <Slider autoplay={1000}>
                            <div className="slider-1 slid-img">

                            </div>
                            <div className="slider-2 slid-img">

                            </div>
                            <div className="slider-3 slid-img">

                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BigProductSlider
