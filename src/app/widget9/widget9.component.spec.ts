import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Widget9Component } from './widget9.component';

describe('Widget9Component', () => {
  let component: Widget9Component;
  let fixture: ComponentFixture<Widget9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Widget9Component]
    });
    fixture = TestBed.createComponent(Widget9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
