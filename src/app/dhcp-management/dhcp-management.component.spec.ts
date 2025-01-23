import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhcpManagementComponent } from './dhcp-management.component';

describe('DhcpManagementComponent', () => {
  let component: DhcpManagementComponent;
  let fixture: ComponentFixture<DhcpManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DhcpManagementComponent]
    });
    fixture = TestBed.createComponent(DhcpManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
