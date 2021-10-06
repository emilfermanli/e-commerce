import React from 'react'
import { Container, Row, Col, Table } from "reactstrap"
import WishlistItem from './WishlistItem'

function Wishlist() {
    return (
        <div className="pt-5 pb-5">
            <Container>
                <Row>
                    <Col className="mb-5" lg={12}><h2 style={{ fontWeight: "bold" }}>Wishlist</h2></Col>
                    <Col lg={12}>
                        <Table className="wishlist" borderless>
                            <thead className="wish-table cart-box">
                                <tr>
                                    <th className="text-center">Image</th>
                                    <th>Product</th>
                                    <th className="text-center">Stock Status</th>
                                    <th className="text-center">Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <WishlistItem />
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Wishlist
