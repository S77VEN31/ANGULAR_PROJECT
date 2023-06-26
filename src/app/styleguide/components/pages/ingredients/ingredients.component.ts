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
  props = {
    TITLE: "Add ingredients",
    ADD_BUTTON: "Add Ingredient",
    CANCEL_BUTTON: "Cancel",
    SHOPPING_LIST: "Shopping List"
  };
  inputsData = [
    { PLACE_HOLDER: "Ingredient name", INPUT_TYPE: "text" },
    { PLACE_HOLDER: "Ingredient amount", INPUT_TYPE: "number" }
  ];
  SHOPPING_LIST: string = this.props.SHOPPING_LIST;
  ingredients: Ingredient[] = Ingredient.ingredientFactory();
  addNewIngredient(name: string, amount: string) {
    this.ingredients.push(new Ingredient(name, amount));
  }
  addRow(event: Event) {
    this.addNewIngredient(event[0].value, event[1].value);
  }
}
