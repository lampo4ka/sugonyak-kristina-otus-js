const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;

let initialRecipes = [
    {
        name: 'Loaded Guacamole Tacos',
        nameLink: 'LoadedGuacamoleTacos',
        img: 'http://images.soupaddict.com/loaded-guacamole-vegetarian-tacos-3-062214.jpg',
        ingredients: [
            'fresh avocados',
            'black beans',
            'jalapenos',
            'tomatoes or tomatillos',
            'corn or small flour tortillas',
            'corn',
            'lime',
            'cilantro'
        ],
        source: 'http://soupaddict.com/2014/06/loaded-guacamole-vegetarian-tacos/'
    },
    {
        name: 'Green Curry',
        nameLink: 'GreenCurry',
        ingredients: [
            'coconut milk',
            'carrots',
            'onions',
            'garlic',
            'green curry paste',
            'asparagus',
            'cilantro'
        ],
        img: 'http://cookieandkate.com/images/2015/03/thai-green-curry-recipe-0.jpg',
        source: 'http://cookieandkate.com/2015/thai-green-curry-with-spring-vegetables/'
    },
    {
        name: 'Raspberry Chocolate Tart',
        nameLink: 'RaspberryChocolateTart',
        ingredients: [
            'raspberry preserves',
            'cocoa powder',
            'fresh raspberries',
            'coconut milk',
            'almond flour'
        ],
        img: 'http://www.bakerita.com/wp-content/uploads/2015/06/No-Bake-Raspberry-Chocolate-Truffle-Tart-Paleo-11.jpg',
        source: 'http://www.bakerita.com/no-bake-raspberry-chocolate-tart-paleo-vegan-gf/'
    }
];

if (window.localStorage) {
    if (!window.localStorage.recipeBox) {
        window.localStorage.setItem('recipeBox', JSON.stringify(initialRecipes));
    }
}

let recipeStore = JSON.parse(window.localStorage.getItem('recipeBox'));

const RecipeRouter = React.createClass({
    getInitialState: function() {
        return {
            formClass: 'hidden',
            recipes: recipeStore,
            alertMsg: 'I\'m an alert!',
            alertMsgClass: 'hidden'
        }
    },
    showForm: function(e) {
        e.preventDefault();
        this.setState({
            formClass: ''
        })
    },
    closeForm: function(e) {
        this.setState({
            formClass: 'hidden'
        });
        e.preventDefault();
    },
    alertMessage: function(msg) {
        this.setState({
            alertMsg: msg,
            alertMsgClass: ''
        })

        setTimeout(() => {
            this.setState({
                alertMsgClass: 'hidden'
            });
        }, 1500);
    },
    addRecipe: function(e) {
        e.preventDefault();
        let newName = document.getElementById('new-title').value;
        let newSource = document.getElementById('new-source').value;
        let newImg = document.getElementById('new-img').value;
        let newIngredients = document.getElementById('new-ingredients').value;

        if (!newName || !newSource || !newIngredients) {
            this.setState({
                formClass: 'hidden'
            });
            return;
        }

        newIngredients = newIngredients.split(',');

        let newRecipe = {
            name: newName,
            nameLink: newName.replace(' ', ''),
            source: newSource,
            img: newImg,
            ingredients: newIngredients
        }

        document.getElementById('new-title').value = "";
        document.getElementById('new-source').value = "";
        document.getElementById('new-img').value = "";
        document.getElementById('new-ingredients').value = "";

        let newList = [];
        this.state.recipes.forEach(function(recipe) {
            newList.push(recipe);
        });

        newList.push(newRecipe);

        window.localStorage.setItem('recipeBox', JSON.stringify(newList))

        this.setState({
            formClass: 'hidden',
            recipes: newList
        });

        this.alertMessage('Recipe added!');
    },
    deleteRecipe: function() {
        // find which recipe isn't hidden and save its recipeName
        let recipeContainer = document.getElementsByClassName('fullsize-recipe-container')[0];
        let fullRecipes = recipeContainer.children;
        let recipeName = "";
        let removeIndex;

        Array.prototype.forEach.call(fullRecipes, function(recipe, index) {
            if (recipe.className !== 'hidden') {
                // below check only for deleting the read-only recipe
                if (recipe.id.indexOf('completeRecipe') > -1) {
                    recipeName = recipe.id.replace('completeRecipe','');
                    removeIndex = index;
                }
            }
        });

        let newList = [];

        newList = this.state.recipes.filter(function(recipe, index) {
            return index !== removeIndex;
        });

        window.localStorage.setItem('recipeBox', JSON.stringify(newList));

        this.setState({
            recipes: newList
        });

        this.alertMessage('Recipe deleted!');
    },
    editRecipe: function() {
        let recipeContainer = document.getElementsByClassName('fullsize-recipe-container')[0];
        let fullRecipes = recipeContainer.children;
        let recipeName = "";
        let editIndex;

        Array.prototype.forEach.call(fullRecipes, function(recipe) {
            if (recipe.className !== 'hidden') {
                recipeName = recipe.id.replace('editableRecipe','');
            }
        });

        for (var i=0; i<this.state.recipes.length; i++) {
            if (this.state.recipes[i].name === recipeName) {
                editIndex = i;
            }
        }

        //let changeRecipe = this.state.recipes[editIndex];

        let changeName = document.getElementById(`change-name${recipeName}`).value;
        let changeSource = document.getElementById(`change-source${recipeName}`).value;
        let changeImg = document.getElementById(`change-img${recipeName}`).value;
        let changeIngredients = document.getElementById(`change-ingredients${recipeName}`).value;

        let newNameLink = changeName.replace(' ', '');

        let editedRecipe = {
            name: changeName,
            nameLink: newNameLink,
            ingredients: changeIngredients.split(','),
            img: changeImg,
            source: changeSource
        }

        let newRecipes = [];

        for (let j=0; j<this.state.recipes.length; j++) {
            if (j !== editIndex) {
                newRecipes.push(this.state.recipes[j])
            }
            else {
                newRecipes.push(editedRecipe);
            }
        }

        window.localStorage.setItem('recipeBox', JSON.stringify(newRecipes));

        this.setState({
            recipes: newRecipes
        })

        this.alertMessage('Changes saved!');
    },
    createElement: function(Component, props) {
        return <Component recipes={this.state.recipes} delete={this.deleteRecipe} edit={this.editRecipe} {...props} />
    },
    render: function() {
        return (
            <div>
                <Router createElement={this.createElement} history={hashHistory}>
                    <Route path='/' component={wrapComponent(TopBar, {showForm: this.showForm})}>
                        <IndexRoute component={RecipeThumbs} />
                        <Route path='/recipeList' component={RecipeList} />
                        <Route path='/recipeFull/:recipeName' component={RecipeFullList} />
                    </Route>
                </Router>
                <Form submitEvent={this.addRecipe} isShown={this.state.formClass} closeEvent={this.closeForm} />
                <QuickAlert isShown={this.state.alertMsgClass} message={this.state.alertMsg} />
            </div>
        )
    }
});

const wrapComponent = function(Component, props) {
    return React.createClass({
        render: function() {
            return (
                React.createElement(Component, props, this.props.children)
            );
        }
    });
};

const TopBar = React.createClass({
    getInitialState: function() {
        return {
            iconName: 'fa fa-list-ul'
        }
    },
    toggleViews: function() {
        var newIcon = this.state.iconName === 'fa fa-th' ? 'fa fa-list-ul' : 'fa fa-th';
        this.setState({
            iconName: newIcon
        })
    },
    render: function() {
        let otherView = this.state.iconName === 'fa fa-list-ul' ? '/recipeList' : '/';
        return (
            <div>
                <div className="header">
                    <div>
                        <i className="fa fa-cutlery"></i>
                        <span className="head-title">recipe box</span>
                        <i className="fa fa-spoon"></i>
                    </div>

                    <div className='btn-container'>
                        <Link className='btn-link' to={otherView} onClick={this.toggleViews}>
                            <i id="switch-view-icon" className={this.state.iconName}></i>
                        </Link>
                        <Button id="add-btn" type="button" text="add recipe" clickEvent={this.props.showForm} />
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
});

function QuickAlert(props) {
    let currClass = `${props.isShown} quick-alert`;
    return (
        <div className={currClass}>
            <div className="alert-inside">
                {props.message}
            </div>
        </div>
    )
}

const RecipeThumbs = React.createClass({
    render: function() {
        let thumbList = this.props.recipes.map(function(recipe, index) {
            let key = `thumb${index}`
            return (
                <div className="recipe" key={key}>
                    <Recipe data={recipe} />
                </div>
            )
        }.bind(this));

        return (
            <ul className='recipe-container'>
                {thumbList}
            </ul>
        )
    }
});

function RecipeList(props) {
    let nameList = props.recipes.map(function(recipe, index) {
        let redirect = `/recipeFull/${recipe.nameLink}`
        let key = `nameOnly${index}`;
        return (
            <li key={key}>
                <Link className="nameLink" to={redirect}>
                    {recipe.name}
                </Link>
            </li>
        )
    })

    return (
        <ul className="nameList">
            {nameList}
        </ul>
    )
}

function Recipe(props) {
    let redirect = `recipeFull/${props.data.nameLink}`;
    return (
        <li>
            <Link to={redirect}>
                <div className="pic">
                    <img src={props.data.img} alt={props.data.name} />
                </div>
                <div className="title">{props.data.name}</div>
            </Link>
        </li>
    )
}

const RecipeFullList = React.createClass({
    contextTypes: {
        router: React.PropTypes.object,
        location: React.PropTypes.object
    },
    render: function() {
        var recipeName = this.context.location.pathname.replace('/recipeFull/', '').replace('%20', ' ');
        let fullList = this.props.recipes.map(function(recipe, index) {
            let keyFull = `recipeFull${index}`;
            let showClass = recipeName === recipe.nameLink ? '' : 'hidden';

            return (
                <RecipeFull delete={this.props.delete} close={this.context.router.goBack} key={keyFull} data={recipe} show={showClass} edit={this.props.edit} />
            )
        }.bind(this));

        let editList = this.props.recipes.map(function(recipe, index) {
            let keyFull = `editFull${index}`;
            let linkString = `edit${recipe.nameLink}`;
            let showClass = recipeName === linkString ? '' : 'hidden';

            return (
                <EditableRecipeFull close={this.context.router.goBack} key={keyFull} data={recipe} show={showClass} edit={this.props.edit} />
            )
        }.bind(this));

        return (
            <ul className="fullsize-recipe-container">
                {fullList}
                {editList}
            </ul>
        )
    }
});

const RecipeFull = React.createClass({
    contextTypes: {
        router: React.PropTypes.object,
        location: React.PropTypes.object
    },
    render: function() {
        let id = `completeRecipe${this.props.data.name}`;
        let editLink =  `/recipeFull/edit${this.props.data.nameLink}`;
        let returnView = document.getElementById('switch-view-icon').className;
        let backLink = returnView === 'fa fa-list-ul' ? '/' : 'recipeList/';

        return (
            <li className={this.props.show} id={id}>
                <a href={this.props.data.source} target="_blank" className="pic-full">
                    <img src={this.props.data.img} alt={this.props.data.name} />
                </a>
                <div className="details-full">
                    <LinkButton btnClass='close' redirect={backLink} text="X"/>
                    <div className="title-full title">{this.props.data.name}</div>
                    <div className="link-row">
                        <a href={this.props.data.source} target="_blank" className="link btn">source</a>
                        <LinkButton text="edit" redirect={editLink} />
                        <LinkButton clickEvent={this.props.delete} redirect='/' text="delete" />
                    </div>
                    <IngredientsList recipe={this.props.data.name} ingredients={this.props.data.ingredients} />
                </div>
            </li>
        )
    }
});

const EditableRecipeFull = React.createClass({
    getInitialState: function() {
        // this doesn't work unless there's a change. 'x' button doesn't go back
        return {
            redirect: ''
        }
    },
    nameChange: function() {
        let newName = document.getElementById(`change-name${this.props.data.name}`).value.replace(' ', '');

        this.setState({
            redirect: `recipeFull/${newName}`
        }, function() {console.log(this.state.redirect)})

    },
    contextTypes: {
        router: React.PropTypes.object,
        location: React.PropTypes.object
    },
    render: function() {
        let id = `editableRecipe${this.props.data.name}`;
        let changeName = `change-name${this.props.data.name}`;
        let changeIng = `change-ingredients${this.props.data.name}`;
        let changeImg = `change-img${this.props.data.name}`;
        let changeSource = `change-source${this.props.data.name}`;

        let goBack = this.state.redirect === '' ? `recipeFull/${this.props.data.nameLink}` : this.state.redirect;

        return (
            <li className={this.props.show} id={id}>
                <a href={this.props.data.source} target="_blank" className="pic-full">
                    <img src={this.props.data.img} alt={this.props.data.name} />
                </a>

                <div className="edit-details-full">
                    <LinkButton redirect={goBack} text="X" btnClass='close' />
                    <div className="title-full title">Edit {this.props.data.name}</div>
                    <div className='form-div'>
                        <div className="new-inputs">
                            <label htmlFor='change-name' className="change-subtitle">New Name</label>
                            <input id={changeName} name='change-name' onChange={this.nameChange} defaultValue={this.props.data.name} />

                            <label htmlFor='change-ingredients' className="change-subtitle">New Ingredients</label>
                            <input name='change-ingredients' id={changeIng} defaultValue={this.props.data.ingredients.toString()} />

                            <label htmlFor='change-img' className="change-subtitle">New Image Url</label>
                            <input name='change-img' id={changeImg} defaultValue={this.props.data.img} />

                            <label htmlFor='change-source' className="change-subtitle">New Recipe Source</label>
                            <input name='change-source' id={changeSource} defaultValue={this.props.data.source} />
                            <LinkButton btnClass='link' clickEvent={this.props.edit} redirect={goBack} text="submit changes" />
                        </div>
                    </div>
                </div>
            </li>
        )
    }
});

function IngredientsList(props) {
    let ingList = props.ingredients.map(function(item, index) {
        let key = `${props.recipe}Ingredient${index}`;
        return (
            <li key={key}>{item}</li>
        )
    });
    return (
        <div className="ingredients-full">
            <h3>Ingredients</h3>
            <ul>
                {ingList}
            </ul>
        </div>
    )
}

const Form = React.createClass({
    render: function() {
        let formClass = `add-form ${this.props.isShown}`;
        return (
            <form onSubmit={this.props.submitEvent} id="recipe-form" className={formClass}>
                <div className="form-inside">
                    <h2>
                        <div>add new recipe</div>
                        <Button text="x" class="close btn" type="button" clickEvent={this.props.closeEvent} />
                    </h2>
                    <input id="new-title" type="text" placeholder="recipe title"/>
                    <input id="new-source" type="text" placeholder="recipe source" />
                    <input id="new-img" type="text" placeholder="recipe picture" />
                    <input id="new-ingredients" type="text" placeholder="enter ingredients, separated by a comma" />
                    <Button clickEvent={this.submit} type="submit" text="add" />
                </div>
            </form>
        )
    }
});

function Button(props) {
    // props.type should only be 'submit' or 'button'
    let newClass = props.class ? props.class : 'btn';
    return (
        <input type={props.type} className={newClass} onClick={props.clickEvent} value={props.text} />
    )
}

const LinkButton = React.createClass({
    getDefaultProps: function() {
        clickEvent: () => {}
    },
    render: function() {
        let newClass = this.props.btnClass ? `btn ${this.props.btnClass}` : 'btn';
        return (
            <Link className={newClass} onClick={this.props.clickEvent} to={this.props.redirect}>{this.props.text}</Link>
        )
    }
})

ReactDOM.render(
    <RecipeRouter />,
    document.getElementById('app')
)
