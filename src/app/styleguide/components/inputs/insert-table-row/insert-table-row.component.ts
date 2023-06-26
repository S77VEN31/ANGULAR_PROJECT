// Angular imports
import { Component, Input, EventEmitter, Output } from "@angular/core";
interface InputsData {
  PLACE_HOLDER: string;
  INPUT_TYPE: string;
  key: string;
}
@Component({
  selector: "app-insert-table-row",
  templateUrl: "./insert-table-row.component.html",
  styleUrls: ["./insert-table-row.component.css"]
})
export class InsertTableRowComponent {
  @Input() inputsData: InputsData[];
  @Input() title: string;
  @Input() addButton: string;
  @Input() cancelButton: string;
  @Output() addRow = new EventEmitter<{ key: string; value: string }[]>();
  inputValues: string[] = [];

  onPress = () => {
    const jsonArray = this.inputsData.map((input, i) => ({
      key: input.key,
      value: this.inputValues[i]
    }));
    this.addRow.emit(jsonArray);
  };
}
