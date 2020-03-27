import React, { Component }  from 'react';
import { compose } from "redux";

import '../App.css';
import Indicators from "./Indicators";
import Slider from '@material-ui/core/Slider';


function Light() {
    const [light, setLight] = React.useState(70);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setLight(newValue);
    };

    return (
        <div className='indicatorPage'>
            <div>
                <div className='indicatorName'>Light</div>
                <div className='indicatorValue'>{light} %</div>
                <Slider className='indicatorSlider light' value={light} onChange={handleChange} aria-labelledby="continuous-slider" />
                <div className='clue'>Too bright for evening</div>
            </div>
            <Indicators/>
        </div>
    );
}

export default compose(

)(Light)
