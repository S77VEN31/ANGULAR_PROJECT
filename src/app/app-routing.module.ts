import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components imports
import { RecipesComponent } from './styleguide/components/pages/recipes/recipes.component';
import { IngredientsComponent } from './styleguide/components/pages/ingredients/ingredients.component';
import { ServerComponent } from './styleguide/components/course/server/server.component';
// Routes
const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: '', component: ServerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
