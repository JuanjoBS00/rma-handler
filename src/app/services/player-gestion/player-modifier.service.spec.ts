import { TestBed } from '@angular/core/testing';

import { PlayerModifierService } from './player-modifier.service';

describe('PlayerModifierService', () => {
  let service: PlayerModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
