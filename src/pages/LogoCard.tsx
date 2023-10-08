import React from "react";
import "react-bootstrap";
import Card from 'react-bootstrap/Card';

export default function LogoCard() {
    return (
        <div>
         <Card className="align-items-center border-0"
         style={{ width: '4rem', height: '6rem' }}>
            <Card.Img variant="top" src="https://www.i2symbol.com/images/symbols/math/infinity_u221E_icon_256x256.png"/>
            <h6 className="card-text mb-5" >TAP</h6>
        

        </Card>
        </div>
    );
}
