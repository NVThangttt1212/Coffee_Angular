import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobuyComponent } from './infobuy.component';

describe('InfobuyComponent', () => {
  let component: InfobuyComponent;
  let fixture: ComponentFixture<InfobuyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfobuyComponent]
    });
    fixture = TestBed.createComponent(InfobuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
