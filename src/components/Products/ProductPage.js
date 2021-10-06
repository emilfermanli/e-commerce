import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ImageGallery from 'react-image-gallery';
import "../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import ProductDescription from './ProductDescription';
import Specification from './Specification';

function ProductPage() {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    const [quantity, setQuantity] = useState(0)
    const [prodInfo, setProdInfo] = useState(0)

    const handlePlus = () => {

        setQuantity(Number(quantity) + 1)
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

    const handleReturn = (e) => {
        setProdInfo(e)
    }


    return (
        <div className="pt-5 pb-5">
            <Container>
                <Row>
                    <Col lg={6}>
                        <ImageGallery slideDuration={1000} autoPlay={false} disableArrowKeys={true} showPlayButton={false} items={images} />
                    </Col>
                    <Col lg={6} className="mb-name">
                        <h3>Product Name</h3>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <form className="mb-product-add d-flex align-items-center" onSubmit={(e) => handleSubmit(e)}>
                            <div className="quantity-bar mr-2 ml-0">
                                <button onClick={handleMinus}>-</button>
                                <input value={quantity} onChange={(e) => { setQuantity(e.target.value) }} id="counter" className="text-center" type="text" />
                                <button onClick={handlePlus}>+</button>
                            </div>
                            <div className="mt-3 mb-3">
                                <button className="btn order-btn  btn-primary prod-btn">Add Cart</button>
                            </div>
                        </form>
                    </Col>
                    <Col lg={12}>
                        <div>
                            <ul className="d-flex align-items-center justify-content-center mt-5">
                                <li>
                                    <button onClick={() => handleReturn(0)}
                                        className={prodInfo === 0 ? "pr-page-active tabs-item" : "tabs-item"}>
                                        Description
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleReturn(1)} className="tabs-item">
                                        Specification
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="tabs-content">
                            {prodInfo === 1 ? <Specification /> : <ProductDescription />}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductPage
