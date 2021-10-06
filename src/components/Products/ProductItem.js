import React, { useState } from 'react'
import product from "../../assets/img/product-7.jpg"
import { Modal, ModalHeader, ModalBody, Col, Row } from "reactstrap"
import { NavLink } from "react-router-dom"

function ProductItem(props) {

    const {
        className,
        big,
    } = props;

    const [modal, setModal] = useState(false);

    const [quantity, setQuantity] = useState(0)



    const toggle = () => setModal(!modal);

    const handlePlus = () => {

        setQuantity(quantity + 1)
    }

    const handleMinus = () => {

        if (quantity === 0) {
            return null
        } else {
            setQuantity(quantity - 1)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [state, setState] = useState("custom-button")

    const handleLoad = (e) => {
        setState("btn btn-loading btn-xl custom-button disabled")
        console.log("test")
    }


    return (
        <div style={big}>
            <div style={big} className="slide-product-item">
                <NavLink to="/product-page">
                    <div className="img-box w-100">
                        <img style={{ objectFit: "contain" }} src={product} alt="product-img" />
                    </div>
                </NavLink>
                <div className="img-header">
                    <h5 style={{ fontSize: "15px" }}>Brandix Pilers</h5>
                </div>
                <div className="price">
                    <h5><strong>24 ₼</strong></h5>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <button onClick={(e) => handleLoad(e)} className={state} >Add to cart</button>
                    <div className="d-flex">
                        <button className="like">
                            <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" /></svg>
                        </button>
                        <button className="like">
                            <svg fill="#ccc" width="16" height="16"><path d="M9,15H7c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h2c0.6,0,1,0.4,1,1v12C10,14.6,9.6,15,9,15z"></path><path d="M1,9h2c0.6,0,1,0.4,1,1v4c0,0.6-0.4,1-1,1H1c-0.6,0-1-0.4-1-1v-4C0,9.4,0.4,9,1,9z"></path><path d="M15,5h-2c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z"></path></svg>
                        </button>
                    </div>
                </div>
                <div style={{ cursor: "pointer" }} onClick={toggle} className="corner-button">
                    <svg width="16" height="16"><path d="M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z  M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z"></path></svg>
                </div>
            </div>
            <Modal style={{ maxWidth: '1600px', width: '80%' }} isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col lg={4}>
                            <img style={{ width: "100%" }} src={product} alt="product" />
                        </Col>
                        <Col lg={8}>
                            <div>
                                <h3>Product Name</h3>
                            </div>
                            <div>
                                lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit amet
                            </div>
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <div className="mt-3 mb-3">
                                    <button style={{ width: "35px" }} onClick={handlePlus} className="btn btn-primary">+</button>
                                    <span style={{ width: "20px", margin: "0 15px", border: "none", textAlign: "center" }} >{quantity}</span>
                                    <button style={{ width: "35px" }} onClick={handleMinus} className="btn btn-primary">-</button>
                                </div>
                                <div className="mt-3 mb-3">
                                    <button className="btn btn-primary">Add Cart</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ProductItem
