import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProductItem from './ProductItem'

function BestSellerProduct() {
    return (
        <div id="bestseller" className="pb-5 pt-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="mb-4 d-flex align-items-center line">
                            <h4>Bestseller</h4>
                        </div>
                    </Col>
                    <Col lg={5} className="big-product">
                        <ProductItem big={{ height: "100%" }} />
                    </Col>
                    <Col lg={7}>
                        <Row>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <ProductItem />
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <ProductItem />
                            </Col>
                            <Col lg={4} md={4} sm={6} xs={12}>
                                <ProductItem />
                            </Col>
                            <Col className="mt-3" lg={4} md={4} sm={6} xs={12}>
                                <ProductItem />
                            </Col>
                            <Col className="mt-3" lg={4} md={4} sm={6} xs={12}>
                                <ProductItem />
                            </Col>
                            <Col className="mt-3" lg={4} md={4} sm={6} xs={12}>
                                <ProductItem />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BestSellerProduct
