import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarathonRowCardComponent } from './marathon-row-card.component';

describe('MarathonRowCardComponent', () => {
  let component: MarathonRowCardComponent;
  let fixture: ComponentFixture<MarathonRowCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarathonRowCardComponent]
    });
    fixture = TestBed.createComponent(MarathonRowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
