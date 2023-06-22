import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecipesComponent } from './table-recipes.component';

describe('TableRecipesComponent', () => {
  let component: TableRecipesComponent;
  let fixture: ComponentFixture<TableRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableRecipesComponent]
    });
    fixture = TestBed.createComponent(TableRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
