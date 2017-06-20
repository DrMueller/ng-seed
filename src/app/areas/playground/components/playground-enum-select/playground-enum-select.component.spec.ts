import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundEnumSelectComponent } from './playground-enum-select.component';

describe('PlaygroundEnumSelectComponent', () => {
  let component: PlaygroundEnumSelectComponent;
  let fixture: ComponentFixture<PlaygroundEnumSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundEnumSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundEnumSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
