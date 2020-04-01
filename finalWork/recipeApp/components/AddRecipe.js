import React, { Component } from "react";
import BoxPreviewStyle from "./BoxPreview/BoxPreviewStyle.css";

class AddRecipe extends Component {
    constructor() {
        super();
        this.state = {
            error: false
        }
    }

    // сохранение нового навзания рецепта
    handleTitleChange(e) {
        this.setState({title: e.target.value})
    }
    // сохранение нового фото
    handleImageChange(e) {
        this.setState({img: e.target.value})
    }

    // сохранение новых ингредиентов
    handleComponentsChange(e) {
        this.setState({components: e.target.value})
    }

    // сохранение новых шагов приготовления
    handleStepsChange(e) {
        this.setState({steps: e.target.value})
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        if ( !this.state.title || !this.state.components || !this.state.steps ) {
            this.error();
            return;
        }
        this.props.add(
            this.state.title,
            this.state.components,
            this.state.steps,
            this.state.img
        );
        this.props.toggleHidden();
    }

    error(){
        this.setState({error: true});
    }

    render() {
        var error;
        if ( this.state.error ) {
            error = 	<span className={BoxPreviewStyle}>
							Вы заполнили не все обязательные поля
						</span>
        }
        return (
            <div
                className={BoxPreviewStyle.formOverlay}
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
                            onChange={this.handleComponentsChange.bind(this)}
                        />
                        <label>Способ приготовления *</label>
                        <textarea
                            onChange={this.handleStepsChange.bind(this)}
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
