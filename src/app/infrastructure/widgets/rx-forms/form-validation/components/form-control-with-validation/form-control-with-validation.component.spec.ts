import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlWithValidationComponent } from './form-control-with-validation.component';

describe('FormControlWithValidationComponent', () => {
  let component: FormControlWithValidationComponent;
  let fixture: ComponentFixture<FormControlWithValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlWithValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
