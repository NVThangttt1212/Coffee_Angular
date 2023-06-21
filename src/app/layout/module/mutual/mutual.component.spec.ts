import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutualComponent } from './mutual.component';

describe('MutualComponent', () => {
  let component: MutualComponent;
  let fixture: ComponentFixture<MutualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MutualComponent]
    });
    fixture = TestBed.createComponent(MutualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
