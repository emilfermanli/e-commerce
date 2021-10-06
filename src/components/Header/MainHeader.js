import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap"
import mbmenu from "../../assets/img/mbmenu.svg"
import hearth from "../../assets/img/whislist.svg"
import cart from "../../assets/img/cart.svg"
import user from "../../assets/img/user.svg"
import logo from "../../assets/img/logo.png"
import { Link, NavLink } from "react-router-dom"
import profilPic from "../../assets/img/teammate-1.jpg"
import prod from "../../assets/img/teammate-1.jpg"


function MainHeader() {

    const [menu, setMenu] = useState(false)
    const [open, setOpen] = useState(false)
    const [drop, setDrop] = useState(false)
    const [carts, setCarts] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    const menuIn = {
        left: "0px"
    }
    const menuOut = {
        left: "-290px"
    }

    const desMenu = () => {
        setOpen(!open)
    }




    const styles = {
        background: "white",
        zIndex: "999",
        WebkitTransitionDelay: "0s,0s,0s",
        transitionDelay: "0s,0s,0s",
        opacity: 1,
        visibility: "visible",
        WebkitTransform: "rotateX(0deg)",
        transform: "rotateX(0deg)",
        position: "absolute",
        right: "0px"
    }


    const focus = () => { setCarts(false) }




    return (
        <div className="nav-panel">
            <div style={menu ? menuIn : menuOut} className="hamburger d-lg-none d-xl-none">
                <ul className="hb-menu">
                    <li className="fst">
                        <Link to="/">
                            <span>Menu</span>
                        </Link>
                        <button onClick={handleMenu} className="close">X</button>
                    </li>
                    <li>
                        <div>
                            <Link to="/">
                                Power Tools
                                    </Link>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                            </button>
                        </div>
                        <div>
                            <ul>
                                <li>asdad</li>
                                <li>asdad</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <Container>
                <Row>
                    <Col className="position-relative" lg={3} sm={4} xs={9} md={4}>
                        <div style={{ position: "relative", left: "0", zIndex: "9" }} className="category-bar d-none d-lg-block d-xl-block">
                            <ul style={open ? { height: "45px", transition: ".6s" } : { height: "auto" }} className="list-unstyled text-white desk-menu">
                                <li>
                                    <button style={{ background: "none", border: "none" }} onClick={desMenu} className="d-flex p-2 text-white align-items-center justify-content-between w-100">
                                        <div>
                                            <img className="mr-3" src={mbmenu} alt="menu" />
                                            <span>Shop By Category</span>
                                        </div>
                                        <svg fill="#859ba6" xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                                    </button>
                                </li>
                                <li>
                                    <Link to="/">
                                        Power Tools2
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Hand Tools
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Machine Tools
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Building Supplies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Electrical
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Machine Tools
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Building Supplies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Electrical
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Machine Tools
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Building Supplies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Electrical
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Electrical
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className="d-none d-sm-block d-md-block d-lg-none ipad-menu">
                            <button onClick={handleMenu} className="mr-3">
                                <svg fill="black" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
                            </button>
                            <Link to="/">
                                <img height="30px" src={logo} alt="logo" />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={7} className="d-none d-lg-block d-xl-block">
                        <ul className="list-unstyled header-navbar">
                            <li><a className="text-white" href="#feature">Featured Products</a></li>
                            <li><a className="text-white" href="#   bestseller">Bestseller</a></li>
                            <li><a className="text-white" href="#popular">Popular item</a></li>
                            <Link className="text-white" to="/compare">Compare</Link>
                        </ul>
                    </Col>

                    <Col md={6} sm={6} className="d-none d-lg-none ipad-search">
                        <div className="search-bar">
                            <form style={{
                                "height": "100%",
                                "display": "flex"
                            }}>
                                <input className="mn-search" placeholder="Search..." type="search" />
                                <button className="search-btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="20" height="20" viewBox="0 0 24 24"><path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" /></svg>
                                </button>
                            </form>
                        </div>
                    </Col>
                    <Col lg={2} sm={2} md={2} xs={3}>
                        <ul className="d-flex user-action align-items-center justify-content-around">
                            <li>
                                <Link to="/wishlist">
                                    <img src={hearth} alt="whishlist" />
                                </Link>
                                <span className="position-relative">0</span>
                            </li>
                            <li
                                onFocus={() => { setCarts(!carts) }}
                                onBlur={focus}
                            >

                                <NavLink to="/cart" className="d-lg-none d-xl-none">
                                    <img src={cart} alt="cart" />
                                </NavLink>

                                <button
                                    className="d-none d-lg-block d-xl-block"
                                    style={{
                                        background: "none",
                                        border: "none"
                                    }}

                                >
                                    <img src={cart} alt="cart" />
                                </button>
                                <div style={carts ? styles : null} className="dropdown-bar d-none d-md-block d-lg-block cart-bar menu ds-profil dropdown-class ">
                                    <div className="menu-cart">
                                        <div className="d-flex justify-content-around pb-2">
                                            <div>
                                                <Link to="/">
                                                    <img width="70" height="70" src={prod} alt="product-img" />
                                                </Link>
                                            </div>
                                            <div style={{ paddingTop: "5px", paddingLeft: "10px" }}>
                                                <h6>
                                                    <a className="text-dark" href="/">Water Hose 40cm</a>
                                                </h6>
                                                <div><p>1</p> x <p><strong>15.00</strong></p></div>
                                            </div>
                                            <div>
                                                <button className="custom-btn" style={{ border: "none", background: "none" }}>
                                                    <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="drop-cart-total">
                                            <div>
                                                <strong>Subtotal</strong>
                                                <p>215.00</p>
                                            </div>
                                            <div>
                                                <strong>Shipping</strong>
                                                <p>25.00</p>
                                            </div>
                                            <div>
                                                <strong>Tax</strong>
                                                <p>0.00</p>
                                            </div>
                                            <div>
                                                <strong>Total</strong>
                                                <p>150.00</p>
                                            </div>
                                        </div>
                                        <div className="cart-action">
                                            <Link to="/cart">
                                                View Cart
                                            </Link>
                                            <Link className="checkout-btn" to="/checkout">
                                                Checkout
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <span className="position-relative">0</span>

                            </li>
                            <li className="d-none d-lg-block"
                                onFocus={() => { setDrop(!drop) }}
                                onBlur={() => { setDrop(false) }}
                            >
                                <button style={{ background: "none", border: "none" }}>
                                    <img src={user} alt="user" />
                                </button>
                                <div style={drop ? styles : null} className="dropdown-bar menu ds-profil dropdown-class">
                                    <div className="menu-form">
                                        <div className="text-center mb-3 mt-3">
                                            <h6 className="font-weight-bold">Log In to Your Account</h6>
                                        </div>
                                        <Form className="text-center">
                                            <FormGroup>
                                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                                            </FormGroup>
                                            <FormGroup>
                                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                                                <div className="text-right mt-1 mb-1">
                                                    <Link to="/">Forgot password?</Link>
                                                </div>
                                            </FormGroup>
                                            <button className="custom-button">Login</button>
                                            <div className="create">
                                                <Link to="/profile">
                                                    Create an Account
                                                </Link>
                                            </div>
                                        </Form>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-center pp-menu">
                                            <div>
                                                <img src={profilPic} width="44" height="44" style={{ borderRadius: "50%" }} alt="profil pic" />
                                            </div>
                                            <div className="pl-2">
                                                <h6 style={{
                                                    fontSize: "15px",
                                                    lineHeight: "20px",
                                                    fontWeight: "500"
                                                }} className="m-0"><strong>FirstName Surname</strong></h6>
                                                <h6 style={{
                                                    fontSize: "14px",
                                                    lineHeight: "18px",
                                                    color: "#999",
                                                    fontWeight: "500"
                                                }} className="m-0">example@gmail.com</h6>
                                            </div>
                                        </div>
                                        <ul className="login-menu">
                                            <li>
                                                <NavLink to="/profile-dashboard/dashboard">Dashboard</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/profile-dashboard/edit-profile">Edit Profile</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/profile-dashboard/order-history">Order History</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/profile-dashboard/addresses">Adresses</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/profile-dashboard/change-password">Password</NavLink>
                                            </li>
                                            <li className="logout">
                                                <NavLink to="/">Logout</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default MainHeader
