import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonpayComponent } from './amazonpay.component';

describe('AmazonpayComponent', () => {
  let component: AmazonpayComponent;
  let fixture: ComponentFixture<AmazonpayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonpayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
