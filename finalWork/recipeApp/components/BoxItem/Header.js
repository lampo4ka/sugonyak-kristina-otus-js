import React, { Component } from "react";
import Box from '../../style/BoxItem/BoxItem.module.css'
class Header extends Component {

    // handleChange(e) {
    //     // Change title to html of editable elements
    //     this.props.update({title: e.target.innerText});
    //     console.log(this.props.title)
    // }

    render() {
        return (
            <header className={Box.header}>
                <h2 className={Box.title}>
                    Мильфей
                </h2>
            </header>
        );
    }

}
export default Header;
