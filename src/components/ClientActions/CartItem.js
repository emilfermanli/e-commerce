import React, { useState } from 'react'
import testImg from "../../assets/img/teammate-1.jpg"

function CartItem() {

    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount(Number(count) + 1)
    }

    const handleMinus = () => {
        if (count === 0) {
            return null
        } else {
            setCount(count - 1)
        }
    }





    return (
        <tr className="wishlist-item bucket-box">
            <td className="item-img" style={{ width: "100px" }}>
                <button className="ml-4 rem d-lg-none d-md-none">
                    <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                </button>
                <img src={testImg} alt="product-img" />

            </td>
            <td className="text-align-left bc-item-name">
                <span>Water Hose 40cm</span>
            </td>
            <td >15 Azn</td>
            <td >
                <div className="quantity-bar">
                    <button onClick={handleMinus}>-</button>
                    <input value={count} onChange={(e) => { setCount(e.target.value) }} id="counter" className="text-center" type="text" />
                    <button onClick={handlePlus}>+</button>
                </div>
            </td>
            <td >
                15azn
                <button className="ml-4 remove">
                    <svg fill="#ccc" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                </button>
            </td>

        </tr>
    )
}

export default CartItem
