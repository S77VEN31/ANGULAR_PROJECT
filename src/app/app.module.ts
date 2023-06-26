import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
// Components imports
import { AppComponent } from "./app.component";
import { ServerComponent } from "./styleguide/components/course/server/server.component";
import { NavBarComponent } from "./styleguide/components/headers/nav-bar/nav-bar.component";
import { RecipesComponent } from "./styleguide/components/pages/recipes/recipes.component";
import { IngredientsComponent } from "./styleguide/components/pages/ingredients/ingredients.component";
import { TableContainerComponent } from "./styleguide/components/tables/table-container/table-container.component";
import { TableIngredientsComponent } from "./styleguide/components/tables/table-ingredients/table-ingredients.component";
import { TableRecipesComponent } from "./styleguide/components/tables/table-recipes/table-recipes.component";
import { SimpleTextButtonComponent } from "./styleguide/components/buttons/simple-text-button/simple-text-button.component";
import { InsertTableRowComponent } from "./styleguide/components/inputs/insert-table-row/insert-table-row.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RecipesComponent,
    IngredientsComponent,
    ServerComponent,
    TableContainerComponent,
    TableIngredientsComponent,
    TableRecipesComponent,
    SimpleTextButtonComponent,
    InsertTableRowComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
