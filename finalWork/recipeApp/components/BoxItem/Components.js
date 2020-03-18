import React, { Component } from "react";
import Box from './BoxItem.css'
import marked from 'marked';
class Components extends Component {

    handleChangeComponents(e) {
        // Change ingredients to html of editable elements
        const re = /(?:\r\n|\r|\n)/g;
        const str = e.target.innerText.replace(re, '\n\n');
        this.props.update({components: str});
    }

    rawMarkup(text) {
        var rawMarkup = marked(text);
        return {__html: rawMarkup };
    }
    render() {
        const editable = this.editFlag;
        return (
                <div className={Box.components}>
                    <h3>Ингредиенты:</h3>
                    <p
                        contentEditable={editable}
                        onBlur={this.handleChangeComponents.bind(this)}
                        dangerouslySetInnerHTML={this.rawMarkup(this.props.data.components)}
                    />
                </div>
        );
    }

}
export default Components;
