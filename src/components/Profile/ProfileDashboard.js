import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import EditPassword from './EditPassword';
import {
    Switch,
    Route,
    useRouteMatch,
    useParams,
    NavLink,
} from "react-router-dom";
import EditProfile from './EditProfile';
import ProfilDetails from './ProfilDetails';
import EditAddress from './EditAdress';
import Adresses from './Adresses';
import OrderHistory from './OrderHistory';
import OrderDetails from './OrderDetails';
import NotFound from '../Pages/NotFound';

function ProfileDashboard() {

    let { path, url } = useRouteMatch();


    return (
        <div>
            <Container>
                <Row>
                    <Col className="mb-5 pt-5" lg={12}><h2 style={{ fontWeight: "bold", fontSize: "36px", }}>My Profile</h2></Col>
                    <Col lg={3}>
                        <div className="profile-box h-100">
                            <div style={{ borderBottom: "none" }} className="profile-box-header">
                                <h4 className="account-nav__title">Navigation</h4>
                            </div>
                            <ul className="dashboard-body">
                                <li>
                                    <NavLink activeClassName="main-nav-active" to={{
                                        pathname: `${url}/dashboard`
                                    }}>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="main-nav-active" to={{
                                        pathname: `${url}/edit-profile`
                                    }}>
                                        Edit profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="main-nav-active" to={{
                                        pathname: `${url}/order-history`
                                    }}>
                                        Order History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="main-nav-active" to={{
                                        pathname: `${url}/order-details`
                                    }}>
                                        Order Details
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="main-nav-active" to={{
                                        pathname: `${url}/addresses`
                                    }}>
                                        Adresses
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="main-nav-active" to={{
                                        pathname: `${url}/edit-address`
                                    }}>
                                        Edit adresses
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName="main-nav-active" to={{
                                        pathname: `${url}/change-password`
                                    }}>
                                        Password
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="custom-profile-box">
                            <Switch>
                                <Route exact path={`${path}/dashboard`}>
                                    <ProfilDetails />
                                </Route>
                                <Route path={`${path}/:topicId`}>
                                    <System />
                                </Route>
                                <Route path="*">
                                    <NotFound />
                                </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


function System() {

    let { topicId } = useParams();

    if (topicId === "change-password") {
        return (<EditPassword />)
    }

    if (topicId === "edit-profile") {
        return (<EditProfile />)
    }

    if (topicId === "edit-address") {
        return (<EditAddress />)
    }

    if (topicId === "addresses") {
        return (<Adresses />)
    }

    if (topicId === "order-history") {
        return (<OrderHistory />)
    }

    if (topicId === "order-details") {
        return (<OrderDetails />)
    }

}

export default ProfileDashboard
