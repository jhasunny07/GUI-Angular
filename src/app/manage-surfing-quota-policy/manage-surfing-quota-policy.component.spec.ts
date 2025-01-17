import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSurfingQuotaPolicyComponent } from './manage-surfing-quota-policy.component';

describe('ManageSurfingQuotaPolicyComponent', () => {
  let component: ManageSurfingQuotaPolicyComponent;
  let fixture: ComponentFixture<ManageSurfingQuotaPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ManageSurfingQuotaPolicyComponent]
    });
    fixture = TestBed.createComponent(ManageSurfingQuotaPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
