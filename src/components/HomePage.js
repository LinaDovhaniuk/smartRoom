import React, { Component }  from 'react';
import { history } from '../redux/store';


import '../App.css';
import Button from "@material-ui/core/Button";

class HomePage extends Component {
    onBtnClick = () => {
        history.replace(`/temperature`);
    };

    render () {
        return (
            <div className='HomePage-MainContainer'>
                <div>
                    <div className='text'>
                        <div>Hello, Vasya! </div>
                        <div className='welcome'>welcome to smart Room</div>
                        <Button className='btn' onClick={this.onBtnClick}>Click to start</Button>
                    </div>

                </div>


            </div>
        )
    }
}

export default HomePage;

