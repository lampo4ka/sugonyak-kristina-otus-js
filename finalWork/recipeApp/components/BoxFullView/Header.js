import React, { Component } from "react";
import BoxPreviewStyle from "../BoxPreview/BoxPreviewStyle.css";
import BoxStyle from "./BoxStyle.css";
class Header extends Component {


    render() {
        return (
            <div className={BoxPreviewStyle.headerContainer}>
                <div className={BoxPreviewStyle.headerTitle}>
                    <h1>
                        Рецепты
                    </h1>
                </div>
                <div className={BoxPreviewStyle.addButton}>
                    <button onClick={this.props.toggleEdit}>Добавить</button>
                </div>
            </div>


        );
    }

}
export default Header;
