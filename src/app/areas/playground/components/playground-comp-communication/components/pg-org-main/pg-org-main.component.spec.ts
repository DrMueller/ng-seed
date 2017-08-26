import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOrgMainComponent } from './pg-org-main.component';

describe('PgOrgMainComponent', () => {
  let component: PgOrgMainComponent;
  let fixture: ComponentFixture<PgOrgMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgOrgMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgOrgMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
