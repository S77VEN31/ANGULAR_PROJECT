// Angular imports
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-simple-text-button",
  templateUrl: "./simple-text-button.component.html",
  styleUrls: ["./simple-text-button.component.css"]
})
export class SimpleTextButtonComponent {
  @Input() buttonType: string;
  @Input() disabled = false;
  @Input() text: string;
  getButtonClass(): string {
    return this.buttonType;
  }
}
