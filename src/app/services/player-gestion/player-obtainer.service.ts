import { Injectable } from '@angular/core';
import { Player } from 'src/app/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerObtainerService {

  playerlist!: Player[];

  constructor() { }

  public setPlayers(playerlist: Player[]){

    this.playerlist = playerlist;

  }

  public search(id: number) {

    for(var i = 0; i < this.playerlist.length; i++) {
      if(this.playerlist[i].id == id) {
        return this.playerlist[i];
      }
    }

    return this.playerlist[0];
  }
}
