import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPostCreationPageComponent } from './faculty-post-creation-page.component';

describe('FacultyPostCreationPageComponent', () => {
  let component: FacultyPostCreationPageComponent;
  let fixture: ComponentFixture<FacultyPostCreationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyPostCreationPageComponent]
    });
    fixture = TestBed.createComponent(FacultyPostCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
