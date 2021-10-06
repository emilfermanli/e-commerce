import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from "react-slick";
import ProductItem from "./ProductItem"


function PopularProduct() {




    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 998,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }

        ],
        speed: 100,
        rows: 2,
    };

    useEffect(() => {

    }, [settings])


    return (
        <Container >
            <Row>
                <div id="popular" className="pb-5 pt-5 w-100">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="mb-4 d-flex align-items-center line">
                                    <h4>Popular Item</h4>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <Slider {...settings}>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                    <div className="p-2 itm-slick">
                                        <ProductItem />
                                    </div>
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Row>
        </Container>
    )

}


export default PopularProduct