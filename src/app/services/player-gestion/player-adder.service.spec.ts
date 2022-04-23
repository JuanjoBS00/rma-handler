import { TestBed } from '@angular/core/testing';

import { PlayerAdderService } from './player-adder.service';

describe('PlayerAdderService', () => {
  let service: PlayerAdderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerAdderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
