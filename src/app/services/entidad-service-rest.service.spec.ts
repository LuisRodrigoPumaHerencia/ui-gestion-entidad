import { TestBed } from '@angular/core/testing';

import { EntidadServiceRestService } from './entidad-service-rest.service';

describe('EntidadServiceRestService', () => {
  let service: EntidadServiceRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntidadServiceRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
