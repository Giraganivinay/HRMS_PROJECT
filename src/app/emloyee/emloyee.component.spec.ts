import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmloyeeComponent } from './emloyee.component';

describe('EmloyeeComponent', () => {
  let component: EmloyeeComponent;
  let fixture: ComponentFixture<EmloyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmloyeeComponent]
    });
    fixture = TestBed.createComponent(EmloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
