import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirewallManageComponent } from './firewall-manage.component';

describe('FirewallManageComponent', () => {
  let component: FirewallManageComponent;
  let fixture: ComponentFixture<FirewallManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirewallManageComponent]
    });
    fixture = TestBed.createComponent(FirewallManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
