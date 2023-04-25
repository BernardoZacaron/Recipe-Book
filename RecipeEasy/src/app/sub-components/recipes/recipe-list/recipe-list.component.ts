import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe("Strogotest", "lorem ipsum description lorem ipsum", "https://m.media-amazon.com/images/I/615AR5oTwsL.jpg", [new Ingredient("Bread", 3), new Ingredient("Peper", 1)]),
    new Recipe("AnotherRecipe", "lorem ipsum description lorem ipsum", "https://m.media-amazon.com/images/I/615AR5oTwsL.jpg", [new Ingredient("Bread", 3), new Ingredient("Peper", 1)])
  ];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
      this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
