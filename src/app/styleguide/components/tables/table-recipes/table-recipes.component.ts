// Angular imports
import { Component, Input } from "@angular/core";
// Components imports
import { Recipe } from "../../pages/recipes/recipe";

@Component({
  selector: "app-table-recipes",
  templateUrl: "./table-recipes.component.html",
  styleUrls: ["./table-recipes.component.css"]
})
export class TableRecipesComponent {
  @Input() recipes: Recipe[];
}
