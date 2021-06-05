import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGuideComponent } from './add-edit-guide.component';

describe('AddEditGuideComponent', () => {
  let component: AddEditGuideComponent;
  let fixture: ComponentFixture<AddEditGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
