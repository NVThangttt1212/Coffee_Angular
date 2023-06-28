import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAboutComponent } from './detail-about.component';

describe('DetailAboutComponent', () => {
  let component: DetailAboutComponent;
  let fixture: ComponentFixture<DetailAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailAboutComponent]
    });
    fixture = TestBed.createComponent(DetailAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
