import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentDashboardComponent } from './exponent-dashboard.component';

describe('ExponentDashboardComponent', () => {
  let component: ExponentDashboardComponent;
  let fixture: ComponentFixture<ExponentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExponentDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExponentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
