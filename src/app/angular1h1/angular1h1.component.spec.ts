import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular1h1Component } from './angular1h1.component';

describe('Angular1h1Component', () => {
  let component: Angular1h1Component;
  let fixture: ComponentFixture<Angular1h1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular1h1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular1h1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
