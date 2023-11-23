import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldDialogue } from './modal.component';

// Hello world
describe('CreateFieldModal', () => {
  let component: CustomFieldDialogue;
  let fixture: ComponentFixture<CustomFieldDialogue>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomFieldDialogue]
    });
    fixture = TestBed.createComponent(CustomFieldDialogue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
