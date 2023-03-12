import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEntidadComponent } from './registro-entidad.component';

describe('RegistroEntidadComponent', () => {
  let component: RegistroEntidadComponent;
  let fixture: ComponentFixture<RegistroEntidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEntidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroEntidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
