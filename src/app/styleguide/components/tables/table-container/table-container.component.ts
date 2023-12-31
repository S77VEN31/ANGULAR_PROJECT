// Angular imports
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-table-container",
  templateUrl: "./table-container.component.html",
  styleUrls: ["./table-container.component.css"]
})
export class TableContainerComponent {
  @Input() title: string;
}
