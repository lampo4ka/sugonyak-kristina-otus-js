import React, { Component } from "react";
import Box from './BoxItem.css'
import Components from "./Components";
import Steps from "./Steps";

class Body extends Component {

    render() {
        return (
            <div className={Box.body}>
                <div>
                    <img src={this.props.data.img}
                         alt='Milfey'
                         className={Box.img}
                    />
                    <div className={Box.title}>
                        <h1>Мильфей</h1>
                    </div>
                </div>

                <Steps data = {this.props.data}/>
                <Components data = {this.props.data} />

            </div>
        );
    }

}
export default Body;
