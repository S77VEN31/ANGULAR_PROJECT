// Angular imports
import { Component, Input } from "@angular/core";
// Components imports
import { Ingredient } from "../../pages/ingredients/ingredient";

@Component({
  selector: "app-table-ingredients",
  templateUrl: "./table-ingredients.component.html",
  styleUrls: ["./table-ingredients.component.css"]
})
export class TableIngredientsComponent {
  @Input() ingredients: Ingredient[];
}
