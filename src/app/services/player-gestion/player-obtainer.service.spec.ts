import { TestBed } from '@angular/core/testing';

import { PlayerObtainerService } from './player-obtainer.service';

describe('PlayerObtainerService', () => {
  let service: PlayerObtainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerObtainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
