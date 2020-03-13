import React, { Component } from "react";
import Box from './BoxItem.css'
import Components from "./Components";
import Steps from "./Steps";

class Body extends Component {
    render() {
        console.log(this.props);
        return (
            <div className={Box.body}>
                <div>
                    <img src='https://v.img.com.ua/nxs70/b/600x500/e/6a/17d8a161fd8aec45a59a171e04c616ae.jpg'
                         alt='Milfey'
                         className={Box.img}
                    />
                </div>
                <Steps />
                <Components data = {this.props.data} />

            </div>
        );
    }

}
export default Body;
