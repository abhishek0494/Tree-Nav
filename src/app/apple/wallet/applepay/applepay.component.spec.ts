import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplepayComponent } from './applepay.component';

describe('ApplepayComponent', () => {
  let component: ApplepayComponent;
  let fixture: ComponentFixture<ApplepayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplepayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplepayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
