import React, { Component } from "react";
import Box from './BoxItem.css'
import Components from "./Components";
import Steps from "./Steps";

class Body extends Component {

    handleChangeImg(e) {
        this.props.update({img: e.target.value});
    }

    handleChange(e) {
        // Change title to html of editable elements
        this.props.update({title: e.target.innerText});
        console.log(this.props.title)
    }

    render() {
        return (
            <div className={Box.body}>
                <div>
                    <img src={this.props.data.img}
                         alt='Milfey'
                         className={Box.img}
                    />
                    <div>
                        <div className={Box.title}>
                            <h1
                                contentEditable={this.props.editable}
                                onBlur={this.handleChange.bind(this)}
                            >
                                {this.props.data.title}
                            </h1>
                        </div>
                        <div className={Box.button}>
                            <button onClick={this.props.toggleEdit}>Edit</button>
                        </div>
                    </div>
                </div>

                <Steps
                    update= {this.updateRecipe}
                    data = {this.props.data}
                    editable = {this.props.editable}
                />
                <Components
                    update= {this.updateRecipe}
                    data = {this.props.data}
                    editable = {this.props.editable}

                />

            </div>
        );
    }

}
export default Body;
