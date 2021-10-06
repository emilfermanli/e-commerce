import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import InfiniteCarousel from 'react-leaf-carousel';
import ProductItem from './ProductItem';

function ProductList() {


    return (
        <div id="feature" className="pb-5 pt-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="mb-4 d-flex align-items-center line">
                            <h4>Featured Products</h4>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 900,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 1000,
                                    settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                    },
                                },
                            ]}
                            dots={false}
                            showSides={true}
                            sidesOpacity={.5}
                            sideSize={.1}
                            slidesToScroll={4}
                            slidesToShow={4}
                            scrollOnDevice={true}
                        >
                            <div>
                                <ProductItem />
                            </div>
                            <div>
                                <ProductItem />
                            </div>
                            <div>
                                <ProductItem />
                            </div>
                            <div>
                                <ProductItem />
                            </div>
                            <div>
                                <ProductItem />
                            </div>
                        </InfiniteCarousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductList
