import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InsertTableRowComponent } from "./insert-table-row.component";

describe("InsertIngredientComponent", () => {
  let component: InsertTableRowComponent;
  let fixture: ComponentFixture<InsertTableRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertTableRowComponent]
    });
    fixture = TestBed.createComponent(InsertTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
