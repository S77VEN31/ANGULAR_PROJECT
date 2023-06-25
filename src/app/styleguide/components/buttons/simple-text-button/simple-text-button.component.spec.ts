import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextButtonComponent } from './simple-text-button.component';

describe('SimpleTextButtonComponent', () => {
  let component: SimpleTextButtonComponent;
  let fixture: ComponentFixture<SimpleTextButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleTextButtonComponent]
    });
    fixture = TestBed.createComponent(SimpleTextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
