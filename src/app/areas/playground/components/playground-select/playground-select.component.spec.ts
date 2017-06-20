import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundSelectComponent } from './playground-select.component';

describe('PlaygroundSelectComponent', () => {
  let component: PlaygroundSelectComponent;
  let fixture: ComponentFixture<PlaygroundSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
