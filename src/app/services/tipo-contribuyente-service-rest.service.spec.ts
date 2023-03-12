import { TestBed } from '@angular/core/testing';

import { TipoContribuyenteServiceRestService } from './tipo-contribuyente-service-rest.service';

describe('TipoContribuyenteServiceRestService', () => {
  let service: TipoContribuyenteServiceRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoContribuyenteServiceRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
