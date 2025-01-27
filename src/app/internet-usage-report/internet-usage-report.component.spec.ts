import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetUsageReportComponent } from './internet-usage-report.component';

describe('InternetUsageReportComponent', () => {
  let component: InternetUsageReportComponent;
  let fixture: ComponentFixture<InternetUsageReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InternetUsageReportComponent]
    });
    fixture = TestBed.createComponent(InternetUsageReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
