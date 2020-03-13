import React, { Component } from "react";
import Box from './BoxItem/BoxItem.css'
import BoxItem from "./BoxItem/BoxItem";

class BoxContainer extends Component {

    constructor() {
        super();
        const data =
            {
                key: 0,
                title: 'Мильфей',
                components: 'сахар\n\nсахар\n\nсахар\n\n сахар\n\n сахар\n\n сахар',
                steps: "1. Chop the herbs and garlic with 1 tsp sea salt until very fine. Add the mustard and capers , and combine.\n2. Transfer the mixture to a bowl and stir in the olive oil. Add the vinegar, little by little, stirring and tasting as you go – trust your palate!",
                img: 'https://v.img.com.ua/nxs70/b/600x500/e/6a/17d8a161fd8aec45a59a171e04c616ae.jpg'
            };
        this.state = {
            data,
        };
    }


    render() {
        return (
            <div className={Box.boxItem}>
                <BoxItem
                    data = {this.state.data}
                />
            </div>
        );
    }
}

export default BoxContainer;
