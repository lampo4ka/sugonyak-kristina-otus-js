import React, { Component } from "react";
import BoxPreviewStyle from "./BoxPreview/BoxPreviewStyle.css";

class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
    }
    handleTitleChange(e) {
        this.setState({title: e.target.value})
    }

    handleImageChange(e) {
        this.setState({img: e.target.value})
    }

    handleIngredientsChange(e) {
        this.setState({ingredients: e.target.value})
    }

    handleInstructionsChange(e) {
        this.setState({instructions: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if ( !this.state.title || !this.state.ingredients || !this.state.instructions ) {
            this.error();
            return;
        }
        this.props.add(
            this.state.title,
            this.state.ingredients,
            this.state.instructions,
            this.state.img
        )
        this.props.toggleHidden();
    }

    error(){
        this.setState({error: true});
    }

    /* closes form when overlay is clicked
     */
    // handleClick(e) {
    //     const formBg = document.querySelector('.formContainer');
    //     const isClickInside = formBg.contains(e.target);
    //
    //     if (!isClickInside) {
    //         //the click was outside the specifiedElement, do something
    //         this.props.toggleHidden();
    //     }
    // }

    render() {
        var error;
        if ( this.state.error ) {
            error = 	<span className={BoxPreviewStyle}>
							You must complete all fields marked as required
						</span>
        }
        return (
            <div
                className={BoxPreviewStyle.formOverlay}
                //onClick={this.handleClick.bind(this)}
            >
                <div className={BoxPreviewStyle.formContainer}>
                    <form
                        className={BoxPreviewStyle.form}
                        onSubmit={this.handleSubmit.bind(this)}
                    >
                        <h2 className={BoxPreviewStyle.form__title}>Добавь новый рецепт</h2>
                        <label>Название *</label>
                        <input
                            type="text"
                            onChange={this.handleTitleChange.bind(this)}
                        />
                        <label>Ингредиенты *</label>
                        <textarea
                            onChange={this.handleIngredientsChange.bind(this)}
                        />
                        <label>Способ приготовления *</label>
                        <textarea
                            onChange={this.handleInstructionsChange.bind(this)}
                        />
                        <label>URL фотографии</label>
                        <input
                            type="text"
                            onChange={this.handleImageChange.bind(this)}
                        />
                        <input
                            type="submit"
                            value="Добавить рецепт"
                        />
                        <input
                            type="submit"
                            value="Нет"
                            onClick={this.props.toggleHidden}
                        />
                        {error}
                    </form>
                </div>
            </div>
        );
    }

}
export default AddRecipe;
