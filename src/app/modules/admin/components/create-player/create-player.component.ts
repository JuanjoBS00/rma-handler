import { Component, OnInit } from '@angular/core';
import { PlayerAdderService } from 'src/app/services/player-gestion/player-adder.service';
import { Player } from 'src/app/player-interface';
import { Router } from '@angular/router';
import { PlayerTransporterService } from 'src/app/services/player-gestion/player-transporter.service';


@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  player!: Player;
  originalPlayers!: Player[];
  finalPlayers!: Player[];

  constructor(private router: Router, private _playerAdderService: PlayerAdderService, private _playerTransporterService: PlayerTransporterService ) { }

  ngOnInit(): void {
    this.player = {"id":0, "nombre":"", "apellidos":"", "posicion":"", "goles":0, "asistencias":1, "edad":29},
    
    this.originalPlayers = this._playerTransporterService.getPlayers();
  }

  addPlayer() {
    this._playerAdderService.setPlayer(this.player);
    this._playerAdderService.setPlayers(this.originalPlayers);
    this.finalPlayers = this._playerAdderService.add();
    this._playerTransporterService.setPlayers(this.finalPlayers);
    this.router.navigate(['/admin/players']);
  }

}
