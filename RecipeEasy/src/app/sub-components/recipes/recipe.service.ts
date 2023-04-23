import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe("Strogotest", "lorem ipsum description lorem ipsum", "https://m.media-amazon.com/images/I/615AR5oTwsL.jpg"),
        new Recipe("AnotherRecipe", "lorem ipsum description lorem ipsum", "https://m.media-amazon.com/images/I/615AR5oTwsL.jpg")
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}