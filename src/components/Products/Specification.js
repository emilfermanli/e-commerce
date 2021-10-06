import React from 'react'

function Specification() {
    return (
        <div>
            <div>
                <h3 className="font-weight-bold" style={{ marginBottom: "50px" }}>Specification</h3>
            </div>
            <div>
                <ul className="spec-list">
                    <li><h4 style={{ fontSize: "18px" }} className="font-weight-bold">General</h4></li>
                    <li>
                        <span>
                            Material
                        </span>
                        <span>
                            Aluminium, Plastic
                        </span>
                    </li>
                    <li>
                        <span>
                            Engine Type
                        </span>
                        <span>
                            Brushless
                        </span>
                    </li>
                    <li>
                        <span>
                            Battery Voltage
                        </span>
                        <span>
                            18 V
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="spec-list mt-5">
                    <li><h4 style={{ fontSize: "18px" }} className="font-weight-bold">Dimensions</h4></li>
                    <li>
                        <span>
                            Material
                        </span>
                        <span>
                            Aluminium, Plastic
                        </span>
                    </li>
                    <li>
                        <span>
                            Engine Type
                        </span>
                        <span>
                            Brushless
                        </span>
                    </li>
                    <li>
                        <span>
                            Battery Voltage
                        </span>
                        <span>
                            18 V
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <p className="spec-info">
                    Information on technical characteristics, the delivery set, the country of manufacture and the appearance of the goods is for reference only and is based on the latest information available at the time of publication.
                </p>
            </div>
        </div>
    )
}

export default Specification
