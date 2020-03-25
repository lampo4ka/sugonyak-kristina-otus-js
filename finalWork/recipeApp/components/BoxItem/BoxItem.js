import React, { Component } from "react";
import Box from './BoxItem.css'
import Header from "./Header";
import Body from "./Body";

class BoxItem extends Component {

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
    //
    // /* closes form when overlay is clicked
    //  */
    // handleClick(e) {
    //     const formBg = document.querySelector(".box");
    //     const isClickInside = formBg.contains(e.target);
    //
    //     if (!isClickInside) {
    //         //the click was outside the specifiedElement, do something
    //         this.props.close();
    //     }
    // }
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
        // if(!this.props.show){
        //     return null;
        // }
        return (
            <div className={Box.boxItem}>
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

export default BoxItem;
