import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsframeworkComponent } from './jsframework.component';

describe('JsframeworkComponent', () => {
  let component: JsframeworkComponent;
  let fixture: ComponentFixture<JsframeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsframeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsframeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
