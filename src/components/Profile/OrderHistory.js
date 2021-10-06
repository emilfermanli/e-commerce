import React from 'react'
import { Table } from "reactstrap"
import { Link } from "react-router-dom"

function OrderHistory() {
    return (
        <div className="profile-box">
            <div className="profile-box-header">
                <h5 className="account-nav__title">Order History</h5>
            </div>
            <Table className="card-table">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"><Link to="/">#8132</Link></th>
                        <td>02 April, 2019</td>
                        <td>Pending</td>
                        <td>$2,719.00 for 5 item(s)</td>
                    </tr>
                    <tr>
                        <th scope="row"><Link to="/">#8132</Link></th>
                        <td>02 April, 2019</td>
                        <td>Pending</td>
                        <td>$2,719.00 for 5 item(s)</td>
                    </tr>
                    <tr>
                        <th scope="row"><Link to="/">#8132</Link></th>
                        <td>02 April, 2019</td>
                        <td>Pending</td>
                        <td>$2,719.00 for 5 item(s)</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default OrderHistory
