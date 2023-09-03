import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEmployeeComponent } from './task-employee.component';

describe('TaskEmployeeComponent', () => {
  let component: TaskEmployeeComponent;
  let fixture: ComponentFixture<TaskEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskEmployeeComponent]
    });
    fixture = TestBed.createComponent(TaskEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
