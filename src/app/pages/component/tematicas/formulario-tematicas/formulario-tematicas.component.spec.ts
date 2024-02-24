import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTematicasComponent } from './formulario-tematicas.component';

describe('FormularioTematicasComponent', () => {
  let component: FormularioTematicasComponent;
  let fixture: ComponentFixture<FormularioTematicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTematicasComponent]
    });
    fixture = TestBed.createComponent(FormularioTematicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
