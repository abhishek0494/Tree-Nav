import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pixel3Component } from './pixel3.component';

describe('Pixel3Component', () => {
  let component: Pixel3Component;
  let fixture: ComponentFixture<Pixel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pixel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pixel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
