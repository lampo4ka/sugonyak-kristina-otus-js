import React, { Component } from "react";
import Box from './BoxItem.css'
class Components extends Component {

    render() {
        return (
                <div className={Box.steps}>
                    <h2>Ингредиенты</h2>
                    <p
                        dangerouslySetInnerHTML={this.rawMarkup(this.props.ingredients)}
                    />
                </div>
        );
    }

}
export default Components;
