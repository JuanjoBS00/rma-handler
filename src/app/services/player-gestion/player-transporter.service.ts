import { Injectable } from '@angular/core';
import { Player } from 'src/app/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerTransporterService {

  playerlist!: Player[];

  constructor() { }

  public setPlayers(playerlist: Player[]) {
    this.playerlist = playerlist;
  }
  
  public getPlayers() {
    return this.playerlist;
  }


}