import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMarathonsComponent } from './my-marathons.component';

describe('MyMarathonsComponent', () => {
  let component: MyMarathonsComponent;
  let fixture: ComponentFixture<MyMarathonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyMarathonsComponent]
    });
    fixture = TestBed.createComponent(MyMarathonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
