import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaratonDescriptionComponent } from './maraton-description.component';

describe('MaratonDescriptionComponent', () => {
  let component: MaratonDescriptionComponent;
  let fixture: ComponentFixture<MaratonDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaratonDescriptionComponent]
    });
    fixture = TestBed.createComponent(MaratonDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
