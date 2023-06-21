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

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RecipesComponent,
    IngredientsComponent,
    ServerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
