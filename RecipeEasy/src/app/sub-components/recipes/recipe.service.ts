import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe("Strogotest", "lorem ipsum description lorem ipsum", "https://m.media-amazon.com/images/I/615AR5oTwsL.jpg", [new Ingredient("Meat", 2), new Ingredient("Salt", 10)]),
        new Recipe("AnotherRecipe", "lorem ipsum description lorem ipsum", "https://m.media-amazon.com/images/I/615AR5oTwsL.jpg", [new Ingredient("Bread", 3), new Ingredient("Peper", 1)])
    ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}