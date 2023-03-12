import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizacionEntidadComponent } from './actualizacion-entidad.component';

describe('ActualizacionEntidadComponent', () => {
  let component: ActualizacionEntidadComponent;
  let fixture: ComponentFixture<ActualizacionEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizacionEntidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizacionEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
