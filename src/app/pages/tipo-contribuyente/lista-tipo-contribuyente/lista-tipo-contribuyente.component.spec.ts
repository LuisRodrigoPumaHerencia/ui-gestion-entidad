import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoContribuyenteComponent } from './lista-tipo-contribuyente.component';

describe('ListaTipoContribuyenteComponent', () => {
  let component: ListaTipoContribuyenteComponent;
  let fixture: ComponentFixture<ListaTipoContribuyenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTipoContribuyenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTipoContribuyenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
