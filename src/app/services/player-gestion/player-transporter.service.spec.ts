import { TestBed } from '@angular/core/testing';

import { PlayerTransporterService } from './player-transporter.service';

describe('PlayerTransporterService', () => {
  let service: PlayerTransporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerTransporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
