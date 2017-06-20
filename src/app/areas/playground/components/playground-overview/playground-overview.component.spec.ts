import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundOverviewComponent } from './playground-overview.component';

describe('PlaygroundOverviewComponent', () => {
  let component: PlaygroundOverviewComponent;
  let fixture: ComponentFixture<PlaygroundOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
