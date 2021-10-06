import React from 'react'
import BigProductSlider from './BigProductSlider'
import ProductList from './ProductList'
import BestSellerProduct from './BestSellerProduct'
import PopularProduct from './PopularProduct'

function Home() {
    return (
        <div>
            <BigProductSlider />
            <ProductList />
            <BestSellerProduct />
            <PopularProduct />
        </div>
    )
}

export default Home
