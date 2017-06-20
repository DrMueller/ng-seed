import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundPrimengEditorComponent } from './playground-primeng-editor.component';

describe('PlaygroundPrimengEditorComponent', () => {
  let component: PlaygroundPrimengEditorComponent;
  let fixture: ComponentFixture<PlaygroundPrimengEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundPrimengEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundPrimengEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
