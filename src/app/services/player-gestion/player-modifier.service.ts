import { Injectable } from '@angular/core';
import { Player } from 'src/app/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerModifierService {

  player!: Player;
  playerlist!: Player [];

  constructor() { }

  public setPlayer(player: Player){
    this.player = player;
  }

  public setPlayers(playerlist: Player[]){
    this.playerlist = playerlist;
  }

  public modify(){
    for(var i = 0; i < this.playerlist.length; i++) {
      if(this.playerlist[i].id == this.player.id) {
          this.playerlist[i] = this.player;
      }
    }
    return this.playerlist;

  }
}
