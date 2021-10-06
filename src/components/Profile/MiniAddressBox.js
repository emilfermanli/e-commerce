import React from 'react'
import { Col } from "reactstrap"
import {
    useRouteMatch,
    NavLink,
} from "react-router-dom";

function MiniAddressBox() {

    let { url } = useRouteMatch();
    return (
        <Col lg={4}>
            <div style={{ padding: "1.5rem" }} className="add-address adding-address">
                <div className="h-100">
                    <h6 className="font-weight-bold pb-2 m-0">Firstname Surname</h6>
                    <div className="profil-adress pb-2">
                        Random Federation
                        115302,Moscow
                        ul. Varshavskaya, 15-2-178
                    </div>
                    <div className="pb-2">
                        <span className="mini-info">Phone Number</span>
                        <h6 className="m-0">+999-99-99</h6>
                    </div>
                    <div className="pb-2">
                        <span className="mini-info">Email Adress</span>
                        <h6 className="m-0">email@gmail.com</h6>
                    </div>
                    <div style={{ paddingBottom: "4px" }}>
                        <NavLink className="mr-2" to={{
                            pathname: `${url}/edit-address`
                        }} >
                            Edit
                        </NavLink>
                        <NavLink to={{
                            pathname: `${url}/edit-address`
                        }} >
                            Remove
                        </NavLink>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default MiniAddressBox
