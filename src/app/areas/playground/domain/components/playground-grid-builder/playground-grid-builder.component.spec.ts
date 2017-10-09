import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundGridBuilderComponent } from './playground-grid-builder.component';

describe('PlaygroundGridBuilderComponent', () => {
  let component: PlaygroundGridBuilderComponent;
  let fixture: ComponentFixture<PlaygroundGridBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundGridBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundGridBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
