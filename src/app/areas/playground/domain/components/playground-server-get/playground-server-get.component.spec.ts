import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundServerGetComponent } from './playground-server-get.component';

describe('PlaygroundServerGetComponent', () => {
  let component: PlaygroundServerGetComponent;
  let fixture: ComponentFixture<PlaygroundServerGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundServerGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundServerGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
