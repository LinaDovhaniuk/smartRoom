import React, { Component }  from 'react';
import { compose } from "redux";

import '../App.css';
import Indicators from "./Indicators";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


function Wifi() {
    const [wifi, handleWifi] = React.useState(true);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        handleWifi(newValue);
    };

    return (
        <div className='indicatorPage'>
            <div>
                <div className='indicatorName'>WI-FI connection</div>
                <div className='indicatorValue'>{wifi ? 'ON' : 'OFF'}</div>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={wifi} onChange={handleChange} name="checkedA" />}
                    />
                </FormGroup>
            </div>
            <Indicators/>
        </div>
    );
}

export default compose(

)(Wifi)
