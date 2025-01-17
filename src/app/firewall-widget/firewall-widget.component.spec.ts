import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallWidgetComponent } from './firewall-widget.component';

describe('FirewallWidgetComponent', () => {
  let component: FirewallWidgetComponent;
  let fixture: ComponentFixture<FirewallWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirewallWidgetComponent]
    });
    fixture = TestBed.createComponent(FirewallWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
