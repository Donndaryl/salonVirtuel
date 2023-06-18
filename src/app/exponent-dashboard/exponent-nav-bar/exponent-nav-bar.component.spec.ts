import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentNavBarComponent } from './exponent-nav-bar.component';

describe('ExponentNavBarComponent', () => {
  let component: ExponentNavBarComponent;
  let fixture: ComponentFixture<ExponentNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExponentNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExponentNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
