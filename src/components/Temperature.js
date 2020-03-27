import React, { Component }  from 'react';
import { compose } from "redux";

import '../App.css';
import Indicators from "./Indicators";
import Slider from '@material-ui/core/Slider';


function Temperature() {
    const [temperature, setTemperature] = React.useState(23);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setTemperature(newValue);
    };

    return (
        <div className='indicatorPage'>
            <div>
                <div className='indicatorName'>Temperature</div>
                <div className='indicatorValue'>{temperature} ℃</div>
                <Slider className='indicatorSlider' value={temperature} onChange={handleChange} aria-labelledby="continuous-slider" />
                <div className='clue'>Too hot!</div>
            </div>
            <Indicators/>
        </div>
    );
}

export default compose(

)(Temperature)
