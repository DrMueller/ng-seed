import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundServerPostComponent } from './playground-server-post.component';

describe('PlaygroundServerPostComponent', () => {
  let component: PlaygroundServerPostComponent;
  let fixture: ComponentFixture<PlaygroundServerPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundServerPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundServerPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
