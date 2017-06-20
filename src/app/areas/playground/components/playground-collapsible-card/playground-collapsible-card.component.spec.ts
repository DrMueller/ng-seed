import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundCollapsibleCardComponent } from './playground-collapsible-card.component';

describe('PlaygroundCollapsibleCardComponent', () => {
  let component: PlaygroundCollapsibleCardComponent;
  let fixture: ComponentFixture<PlaygroundCollapsibleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundCollapsibleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundCollapsibleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
