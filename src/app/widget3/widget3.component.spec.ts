import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget3Component } from './widget3.component';

describe('Widget3Component', () => {
  let component: Widget3Component;
  let fixture: ComponentFixture<Widget3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Widget3Component]
    });
    fixture = TestBed.createComponent(Widget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
