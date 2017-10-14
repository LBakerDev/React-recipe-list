import React, {Component} from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
            title: "Spaghetti", 
            ingredients: ["pasta"],
            img: "spaghetti.jpeg"
            },
            {
            title: "Spaghetti", 
            ingredients: ["pasta"],
            img: "spaghetti.jpeg"
            },
            {
            title: "Spaghetti", 
            ingredients: ["pasta"],
            img: "spaghetti.jpeg"
            }
        ]

    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    render() {

        const recipes = this.props.recipes.map((r, index) =>(
            <Recipe key={index} {...r} />
        ));
        return ( 
            <div className="recipe-list">
                {recipes}
            </div>
        )

    }
}

export default RecipeList;