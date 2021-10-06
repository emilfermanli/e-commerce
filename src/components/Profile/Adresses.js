import React from 'react'
import { Col } from "reactstrap"
import MiniAddressBox from './MiniAddressBox'

function Adresses() {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            lineHeight: "18px"
        }}>
            <Col lg={4} className="pb-3">
                <div className="add-address">
                    <div style={{ borderRadius: "100%", padding: "16px" }} className="add-address">
                        <svg fill="#ebebeb" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                    </div>
                    <div className="mt-4">
                        <button className="edit-detail btn btn-secondary btn-sm">Add New</button>
                    </div>
                </div>
            </Col>
            <MiniAddressBox />
        </div>
    )
}

export default Adresses
