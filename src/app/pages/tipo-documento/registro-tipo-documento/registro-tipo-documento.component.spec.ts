import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTipoDocumentoComponent } from './registro-tipo-documento.component';

describe('RegistroTipoDocumentoComponent', () => {
  let component: RegistroTipoDocumentoComponent;
  let fixture: ComponentFixture<RegistroTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTipoDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
