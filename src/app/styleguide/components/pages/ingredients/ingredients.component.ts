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
    SHOPPING_LIST: "Shopping List"
  };
  SHOPPING_LIST: string = this.data.SHOPPING_LIST;
  ingredients: Ingredient[] = Ingredient.ingredientFactory();
}
