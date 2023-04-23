import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe("Strogotest", "lorem ipsum description lorem ipsum", "https://m.media-amazon.com/images/I/615AR5oTwsL.jpg"),
    new Recipe("AnotherRecipe", "lorem ipsum description lorem ipsum", "https://m.media-amazon.com/images/I/615AR5oTwsL.jpg")
  ];

  constructor(private recipeService: RecipeService ){}

  ngOnInit(): void {
      this.recipes = this.recipeService.getRecipes();
  }

}
