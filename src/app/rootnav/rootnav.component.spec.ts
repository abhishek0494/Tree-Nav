import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootnavComponent } from './rootnav.component';

describe('RootnavComponent', () => {
  let component: RootnavComponent;
  let fixture: ComponentFixture<RootnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
