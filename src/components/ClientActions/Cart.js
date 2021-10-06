import React from 'react'
import { Container, Row, Col, Table } from "reactstrap"
import CartItem from './CartItem'

function Cart() {
    return (
        <div className="pt-5 pb-5">
            <Container>
                <Row>
                    <Col className="mb-5" lg={12}><h2 style={{ fontWeight: "bold" }}>Shopping Cart</h2></Col>
                    <Col lg={12}>
                        <Table className="wishlist" borderless>
                            <thead className="wish-table">
                                <tr className="cart-box">
                                    <th className="text-center">Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th className="text-center">Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CartItem />
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart
