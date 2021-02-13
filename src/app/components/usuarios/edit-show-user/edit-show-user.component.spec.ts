import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShowUserComponent } from './edit-show-user.component';

describe('EditShowUserComponent', () => {
  let component: EditShowUserComponent;
  let fixture: ComponentFixture<EditShowUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditShowUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShowUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
