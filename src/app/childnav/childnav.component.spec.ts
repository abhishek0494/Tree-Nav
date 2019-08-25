import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildnavComponent } from './childnav.component';

describe('ChildnavComponent', () => {
  let component: ChildnavComponent;
  let fixture: ComponentFixture<ChildnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
