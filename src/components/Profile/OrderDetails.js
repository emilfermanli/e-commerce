import React from 'react'
import { Col, Table } from "reactstrap"
import {
    NavLink
} from "react-router-dom";

function OrderDetails() {




    return (
        <div>
            <Col lg={12}>
                <div className="profile-box">
                    <div className="profile-box-header d-flex align-items-center justify-content-between">
                        <div className="account-nav__title">
                            <h5 className="order-tt">Order #3857</h5>
                            <p className="order-hd">Was placed on <strong>19 October, 2020</strong> and is currently <strong>On hold</strong>.</p>
                        </div>
                        <div>
                            <NavLink to={{
                                pathname: `order-history`
                            }} className="edit-detail btn btn-secondary btn-sm">
                                Back to list
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <Table className="selling-item" borderless>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className="selling-table-body">
                                <tr>
                                    <td>Electric Planer Brandix KL370090G 300 Watts × 2</td>
                                    <td>$1,398.00</td>
                                </tr>
                                <tr>
                                    <td>Electric Planer Brandix KL370090G 300 Watts × 2</td>
                                    <td>$1,398.00</td>
                                </tr>
                                <tr className="total-top total-price">
                                    <td>Subtotal</td>
                                    <td>$5,877.00</td>
                                </tr>
                                <tr className="total-price">
                                    <td>Store Credit</td>
                                    <td>$-20.00</td>
                                </tr>
                                <tr className="total-price total-bottom">
                                    <td>Shipping</td>
                                    <td>$25.00</td>
                                </tr>
                                <tr className="total-price">
                                    <td>Total</td>
                                    <td>$5,882.00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export default OrderDetails
