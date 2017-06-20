import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundRxFormComponent } from './playground-rx-form.component';

describe('PlaygroundRxFormComponent', () => {
  let component: PlaygroundRxFormComponent;
  let fixture: ComponentFixture<PlaygroundRxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundRxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundRxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
