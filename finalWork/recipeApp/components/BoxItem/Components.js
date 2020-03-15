import React, { Component } from "react";
import Box from './BoxItem.css'
import marked from 'marked';
class Components extends Component {

    rawMarkup(text) {
        var rawMarkup = marked(text);
        return {__html: rawMarkup };
    }
    render() {
        return (
                <div className={Box.components}>
                    <h2>Ингредиенты</h2>
                    <p
                        dangerouslySetInnerHTML={this.rawMarkup(this.props.data.components)}
                    />
                </div>
        );
    }

}
export default Components;
