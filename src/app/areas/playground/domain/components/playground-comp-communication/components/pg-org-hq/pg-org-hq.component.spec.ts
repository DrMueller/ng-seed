import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOrgHqComponent } from './pg-org-hq.component';

describe('PgOrgHqComponent', () => {
  let component: PgOrgHqComponent;
  let fixture: ComponentFixture<PgOrgHqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgOrgHqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgOrgHqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
