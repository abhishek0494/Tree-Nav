import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pixel3xlComponent } from './pixel3xl.component';

describe('Pixel3xlComponent', () => {
  let component: Pixel3xlComponent;
  let fixture: ComponentFixture<Pixel3xlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pixel3xlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pixel3xlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
