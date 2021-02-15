import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditComentariosComponent } from './add-edit-comentarios.component';

describe('AddEditComentariosComponent', () => {
  let component: AddEditComentariosComponent;
  let fixture: ComponentFixture<AddEditComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
