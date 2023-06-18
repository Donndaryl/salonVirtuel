import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorNavBarComponent } from './visitor-nav-bar.component';

describe('VisitorNavBarComponent', () => {
  let component: VisitorNavBarComponent;
  let fixture: ComponentFixture<VisitorNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
