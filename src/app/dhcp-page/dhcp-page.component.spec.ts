import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhcpPageComponent } from './dhcp-page.component';

describe('DhcpPageComponent', () => {
  let component: DhcpPageComponent;
  let fixture: ComponentFixture<DhcpPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DhcpPageComponent]
    });
    fixture = TestBed.createComponent(DhcpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
