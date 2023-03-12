import { TestBed } from '@angular/core/testing';

import { TipoDocumentoServiceRestService } from './tipo-documento-service-rest.service';

describe('TipoDocumentoServiceRestService', () => {
  let service: TipoDocumentoServiceRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDocumentoServiceRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
