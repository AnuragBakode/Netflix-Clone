import React from 'react';
import "./PlaneScreen.css";
import Plan from './Plan';

function PlansScreen() {
    return (
        <div className ="plansScreen">
            <Plan name = "Basic" description = "720p"/>
            <Plan name = "Standard" description = "1080p"/>
            <Plan name = "Premium" description = "4k + HDR"/>
        </div>
    )
}

export default PlansScreen;
