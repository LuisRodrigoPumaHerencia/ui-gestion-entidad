import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTipoContribuyenteComponent } from './registro-tipo-contribuyente.component';

describe('RegistroTipoContribuyenteComponent', () => {
  let component: RegistroTipoContribuyenteComponent;
  let fixture: ComponentFixture<RegistroTipoContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroTipoContribuyenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroTipoContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
