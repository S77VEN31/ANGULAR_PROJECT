// Angular imports
import { Component } from "@angular/core";
// Enumerables imports
import { Recipe } from "./recipe";
@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent {
  data = {
    RECIPES_LIST: "Recipes list"
  };
  RECIPES_LIST: string = this.data.RECIPES_LIST;
  recipes: Recipe[] = Recipe.recipeFactory();
}
