import React from 'react'
import error404 from "../../assets/img/notFound.jpg"


function NotFound() {
    return (
        <div style={{ width: "100%", height: "100vh" }} className="d-flex align-items-center justify-content-center">
            <img className="w-90 h-90" style={{ marginTop: "90px" }} src={error404} alt="Not Found Page" />
        </div>
    )
}

export default NotFound
