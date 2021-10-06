import React from 'react'
import { Col } from "reactstrap"
import profilImg from "../../assets/img/profilIMG.jpg"
import {
    useRouteMatch,
    NavLink,
    Link
} from "react-router-dom";
import { Table } from 'reactstrap';


function ProfilDetails() {


    let { url } = useRouteMatch();

    return (
        <div className="profil-box">
            <div className="d-flex">
                <Col lg={6}>
                    <div className="profile-box detail-box box-pt h-100">
                        <div className="profile-img">
                            <img src={profilImg} alt="profil-img" />
                        </div>
                        <div className="pb-4 text-center">
                            <div>
                                <strong><span>Firstname Surname</span></strong>
                            </div>
                            <span>email@gmail.com</span>
                        </div>
                        <div>
                            <NavLink to={{
                                pathname: `${url}/edit-profile`
                            }} className="edit-detail btn btn-secondary btn-sm">Edit Profile</NavLink>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="profile-box box-pt h-100">
                        <h6 className="font-weight-bold pb-2">Firstname Surname</h6>
                        <div className="profil-adress pb-2">
                            Random Federation
                            115302,Moscow
                            ul. Varshavskaya, 15-2-178
                    </div>
                        <div className="pb-2">
                            <span className="mini-info">Phone Number</span>
                            <h6>+999-99-99</h6>
                        </div>
                        <div className="pb-2">
                            <span className="mini-info">Email Adress</span>
                            <h6>email@gmail.com</h6>
                        </div>
                        <div>
                            <NavLink to={{
                                pathname: `${url}/edit-address`
                            }} >
                                Edit Address
                        </NavLink>
                        </div>
                    </div>
                </Col>
            </div>
            <Col lg={12}>
                <div className="profile-box mt-4">
                    <div className="profile-box-header">
                        <h5 className="account-nav__title">Recent Orders</h5>
                    </div>
                    <div>
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
                </div>
            </Col>
        </div>
    )
}

export default ProfilDetails
