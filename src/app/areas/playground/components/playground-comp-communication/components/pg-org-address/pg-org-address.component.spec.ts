import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOrgAddressComponent } from './pg-org-address.component';

describe('PgOrgAddressComponent', () => {
  let component: PgOrgAddressComponent;
  let fixture: ComponentFixture<PgOrgAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PgOrgAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PgOrgAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
