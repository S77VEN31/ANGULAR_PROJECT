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
  props = {
    TITLE: "Add recipes",
    ADD_BUTTON: "Add Ingredient",
    CANCEL_BUTTON: "Cancel",
    RECIPES_LIST: "Recipes list"
  };
  inputsData = [
    {
      PLACE_HOLDER: "Insert name",
      INPUT_TYPE: "text",
      key: "name"
    },
    {
      PLACE_HOLDER: "Insert description",
      INPUT_TYPE: "text",
      key: "description"
    },
    {
      PLACE_HOLDER: "Insert image URL",
      INPUT_TYPE: "text",
      key: "imagePath"
    }
  ];
  RECIPES_LIST: string = this.props.RECIPES_LIST;
  recipes: Recipe[] = Recipe.recipeFactory();
  addNewRecipe(name: string, description: string, imagePath: string) {
    this.recipes.push(new Recipe(name, description, imagePath));
  }
  addRow(event: Event) {
    this.addNewRecipe(event[0].value, event[1].value, event[2].value);
  }
}
