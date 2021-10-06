import React from 'react'
import MiniHeader from './MiniHeader'
import SearchHeader from './SearchHeader'
import MainHeader from "./MainHeader"

function Header() {
    return (
        <div>
            <MiniHeader />
            <SearchHeader />
            <MainHeader />
        </div>
    )
}

export default Header
