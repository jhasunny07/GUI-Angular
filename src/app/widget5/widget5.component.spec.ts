import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget5Component } from './widget5.component';

describe('Widget5Component', () => {
  let component: Widget5Component;
  let fixture: ComponentFixture<Widget5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Widget5Component]
    });
    fixture = TestBed.createComponent(Widget5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
