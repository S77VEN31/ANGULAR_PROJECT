// Angular imports
import { Component } from "@angular/core";
// Enumerables imports
import { Ingredient } from "./ingredient";

@Component({
  selector: "app-ingredients",
  templateUrl: "./ingredients.component.html",
  styleUrls: ["./ingredients.component.css"]
})
export class IngredientsComponent {
  data = {
    SHOPPING_LIST: "Shopping List",
    ADD_INGREDIENT: "Add Ingredient",
    DELETE_INGREDIENT: "Delete Ingredient"
  };
  SHOPPING_LIST: string = this.data.SHOPPING_LIST;
  ADD_INGREDIENT: string = this.data.ADD_INGREDIENT;
  DELETE_INGREDIENT: string = this.data.DELETE_INGREDIENT;
  ingredients: Ingredient[] = Ingredient.ingredientFactory();
}
