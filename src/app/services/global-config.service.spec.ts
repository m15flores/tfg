import { TestBed } from '@angular/core/testing';

import { GlobalConfigService } from './global-config.service';

describe('GlobalConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalConfigService = TestBed.get(GlobalConfigService);
    expect(service).toBeTruthy();
  });
});
