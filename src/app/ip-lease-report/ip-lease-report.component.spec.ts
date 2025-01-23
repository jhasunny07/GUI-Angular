import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpLeaseReportComponent } from './ip-lease-report.component';

describe('IpLeaseReportComponent', () => {
  let component: IpLeaseReportComponent;
  let fixture: ComponentFixture<IpLeaseReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IpLeaseReportComponent]
    });
    fixture = TestBed.createComponent(IpLeaseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
