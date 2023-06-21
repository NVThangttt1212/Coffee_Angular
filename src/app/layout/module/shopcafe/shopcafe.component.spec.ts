import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcafeComponent } from './shopcafe.component';

describe('ShopcafeComponent', () => {
  let component: ShopcafeComponent;
  let fixture: ComponentFixture<ShopcafeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopcafeComponent]
    });
    fixture = TestBed.createComponent(ShopcafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
