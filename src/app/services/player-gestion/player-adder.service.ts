import { Injectable } from '@angular/core';
import { Player } from 'src/app/player-interface';
 
@Injectable({
  providedIn: 'root'
})
export class PlayerAdderService {

  player!: Player;
  playerlist!: Player[];

  constructor() { }

  public setPlayer(player: Player){  
    this.player = player;

  }

  public setPlayers(playerlist: Player[]){
    this.playerlist = playerlist;
  }

  public add() {

    var newplayerid = -1;

    for(var i = 0; i < this.playerlist.length; i++) {
      if(this.playerlist[i].id > newplayerid) {
        newplayerid = this.playerlist[i].id;
      }
    }

    newplayerid++;
    this.player.id = newplayerid;

    this.playerlist.push(this.player);

    return this.playerlist;

  }
}
