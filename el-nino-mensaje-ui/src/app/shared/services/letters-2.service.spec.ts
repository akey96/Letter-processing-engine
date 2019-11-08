import { TestBed } from '@angular/core/testing';

import { Letters2Service } from './letters-2.service';

describe('Letters2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Letters2Service = TestBed.get(Letters2Service);
    expect(service).toBeTruthy();
  });
});
