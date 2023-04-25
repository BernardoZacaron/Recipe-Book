import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './sub-components/header/header.component';
import { RecipesComponent } from './sub-components/recipes/recipes.component';
import { RecipeDetailComponent } from './sub-components/recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './sub-components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './sub-components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './sub-components/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './sub-components/shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './sub-components/shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './sub-components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './sub-components/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
