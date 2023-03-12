import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionTipoDocumentoComponent } from './actualizacion-tipo-documento.component';

describe('ActualizacionTipoDocumentoComponent', () => {
  let component: ActualizacionTipoDocumentoComponent;
  let fixture: ComponentFixture<ActualizacionTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizacionTipoDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizacionTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
