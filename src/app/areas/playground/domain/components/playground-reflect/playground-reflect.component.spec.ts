import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundReflectComponent } from './playground-reflect.component';

describe('PlaygroundReflectComponent', () => {
  let component: PlaygroundReflectComponent;
  let fixture: ComponentFixture<PlaygroundReflectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundReflectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundReflectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
