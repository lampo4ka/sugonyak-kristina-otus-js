import React, { Component } from "react";
import Box from '../../style/BoxItem/BoxItem.module.css'

class Body extends Component {
    render() {
        return (
            <div className={Box.body}>
                <div className={Box.img}>
                    <img
                        src='https://v.img.com.ua/nxs70/b/600x500/e/6a/17d8a161fd8aec45a59a171e04c616ae.jpg'
                    />
                </div>
               <div className={Box.components}>Ингредиенты</div>
                <div className={Box.steps}>Способ приготовления</div>

            </div>
        );
    }

}
export default Body;
