import React from 'react'
import { Table, Container, Row, Col } from "reactstrap"
import product from "../../assets/img/product-7.jpg"


function Comparison() {
    return (
        <div className="pt-5 pb-5">
            <Container>
                <Row>
                    <Col className="mb-5" lg={12}><h2 style={{ fontWeight: "bold" }}>Compare</h2></Col>
                    <Col lg={12} className="comp-div">
                        <Table className="compare" bordered>
                            <tbody>
                                <tr>
                                    <th scope="row">Product</th>
                                    <td>
                                        <div>
                                            <img src={product} alt="test" />
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <img src={product} alt="test" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Availability</th>
                                    <td>
                                        <div><span className="stock">In stock</span></div>
                                    </td>
                                    <td>
                                        <div><span className="stock">In stock</span></div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Price</th>
                                    <td>
                                        <div>15 AZN</div>

                                    </td>
                                    <td>
                                        <div>15 AZN</div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Add to Cart</th>
                                    <td>
                                        <div><button className="custom-button">Add to cart</button></div>

                                    </td>
                                    <td>
                                        <div><button className="custom-button">Add to cart</button></div>

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td>
                                        <div className="cart-action d-flex justify-content-center">
                                            <button>remove</button>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cart-action d-flex justify-content-center">
                                            <button>remove</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Comparison
