import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./sub-components/recipes/recipes.component";
import { ShoppingListComponent } from "./sub-components/shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}