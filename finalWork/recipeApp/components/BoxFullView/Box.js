import React, { Component } from "react";
import BoxStyle from './BoxStyle.css'
import Body from "./Body";

class Box extends Component {

    constructor() {
        super();
        this.state = {
            index: true,
            editable: false,
        }
    }

    deleteRecipe() {
        console.log(this.props)
        this.props.delete(this.props.data.key)
    }

    updateRecipe({
                     key = this.props.data.key,
                     title = this.props.data.title,
                     components = this.props.data.components,
                     steps = this.props.data.steps,
                     img = this.props.data.img
                 }) {

        this.props.update(key, title, components, steps, img);
    }

    toggleEdit() {
        console.log("Edit");
        this.setState({editable: true});
    }


    render() {
        console.log(this.props)
        return (
            <div className={BoxStyle.box}>
                <Body
                    data = {this.props.data}
                    update= {this.updateRecipe.bind(this)}
                    toggleEdit = {this.toggleEdit.bind(this)}
                    editable = {this.state.editable}
                    show={this.props.showBox}
                    close={this.props.close}
                    delete = {this.deleteRecipe.bind(this)}
                />
            </div>
        );
    }
}

export default Box;
