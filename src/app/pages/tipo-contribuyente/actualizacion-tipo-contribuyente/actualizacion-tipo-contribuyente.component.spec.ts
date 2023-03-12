import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionTipoContribuyenteComponent } from './actualizacion-tipo-contribuyente.component';

describe('ActualizacionTipoContribuyenteComponent', () => {
  let component: ActualizacionTipoContribuyenteComponent;
  let fixture: ComponentFixture<ActualizacionTipoContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizacionTipoContribuyenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizacionTipoContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
