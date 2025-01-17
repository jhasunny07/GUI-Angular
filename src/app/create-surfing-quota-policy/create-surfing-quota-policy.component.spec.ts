import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurfingQuotaPolicyComponent } from './create-surfing-quota-policy.component';

describe('CreateSurfingQuotaPolicyComponent', () => {
  let component: CreateSurfingQuotaPolicyComponent;
  let fixture: ComponentFixture<CreateSurfingQuotaPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateSurfingQuotaPolicyComponent]
    });
    fixture = TestBed.createComponent(CreateSurfingQuotaPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
