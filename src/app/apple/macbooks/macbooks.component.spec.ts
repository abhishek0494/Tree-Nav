import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbooksComponent } from './macbooks.component';

describe('MacbooksComponent', () => {
  let component: MacbooksComponent;
  let fixture: ComponentFixture<MacbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
