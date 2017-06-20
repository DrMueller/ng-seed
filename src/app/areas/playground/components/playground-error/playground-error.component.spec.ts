import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundErrorComponent } from './playground-error.component';

describe('PlaygroundErrorComponent', () => {
  let component: PlaygroundErrorComponent;
  let fixture: ComponentFixture<PlaygroundErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
