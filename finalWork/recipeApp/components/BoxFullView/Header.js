import React, { Component } from "react";
import BoxPreviewStyle from "../BoxPreview/BoxPreviewStyle.css";
import BoxStyle from "./BoxStyle.css";
import AddRecipe from '../AddRecipe'
class Header extends Component {

    constructor() {
        super();
        this.state = {
            isHidden: true
        };
    }

    toggleHidden() {
        if ( this.state.isHidden ) {
            this.setState({isHidden: false})
        } else {
            this.setState({isHidden: true})
        }
    }

    render() {
        return (
            <div className={BoxPreviewStyle.headerContainer}>
                <div className={BoxPreviewStyle.headerTitle}>
                    <h1>
                        Рецепты
                    </h1>
                </div>
                <div className={BoxPreviewStyle.addButton}>
                    <button onClick={this.toggleHidden.bind(this)}>Новый рецепт</button>
                </div>
                {!this.state.isHidden && <AddRecipe add={this.props.add} toggleHidden={this.toggleHidden.bind(this)}/>}
            </div>


        );
    }

}
export default Header;
