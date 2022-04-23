import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';
import { Player } from 'src/app/player-interface';
import { PlayerObtainerService } from 'src/app/services/player-gestion/player-obtainer.service';
import { PlayerTransporterService } from 'src/app/services/player-gestion/player-transporter.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  playerlist : Player[] = [
    {"id":1, "nombre":"Thibaut", "apellidos":"Courtois", "posicion":"POR", "goles":0, "asistencias":1, "edad":29},
    {"id":2, "nombre":"Dani", "apellidos":"Carvajal Ramos", "posicion":"LD", "goles":2, "asistencias":4, "edad":30},
    {"id":3, "nombre":"Eder", "apellidos":"Militao", "posicion":"DFC", "goles":2, "asistencias":3, "edad":24},
    {"id":4, "nombre":"David", "apellidos":"Alaba", "posicion":"DFC", "goles":3, "asistencias":4, "edad":29},
    {"id":5, "nombre":"Ferland", "apellidos":"Mendy", "posicion":"LI", "goles":1, "asistencias":3, "edad":26},
    {"id":6, "nombre":"Toni", "apellidos":"Kroos", "posicion":"MC", "goles":3, "asistencias":3, "edad":32},
    {"id":7, "nombre":"Carlos Henrique", "apellidos":"Casemiro", "posicion":"MCD", "goles":1, "asistencias":4, "edad":30},
    {"id":8, "nombre":"Luka", "apellidos":"Modric", "posicion":"MC", "goles":2, "asistencias":9, "edad":36},
    {"id":9, "nombre":"Eduardo", "apellidos":"Camavinga", "posicion":"MC", "goles":2, "asistencias":1, "edad":19},
    {"id":10, "nombre":"Lucas", "apellidos":"Vazquez", "posicion":"LD", "goles":3, "asistencias":0, "edad":30},
    {"id":11, "nombre":"Eden", "apellidos":"Hazard", "posicion":"EI", "goles":0, "asistencias":1, "edad":31},
    {"id":12, "nombre":"Vinicius", "apellidos":"Junior", "posicion":"EI", "goles":16, "asistencias":18, "edad":21},
    {"id":13, "nombre":"Karim", "apellidos":"Benzema", "posicion":"DC", "goles":37, "asistencias":12, "edad":34},
  ];

  // CRUD Table Configuration
  @ViewChild(MatTable) table!: MatTable<Element>; 
  tableColumns: string[] = ['id','nombre', 'apellidos', 'posicion', 'goles', 'asistencias', 'edad', 'detalles', 'editar','eliminar']; 

  // Creation of a player and sets a variable which stores the id of the player chosen to be seen 
  player!: Player;
  idChosen = -1;

constructor(private router: Router, private _playerObtainerService: PlayerObtainerService, private _playersTransporterService: PlayerTransporterService) { }

ngOnInit(): void {
  //if a the playerlist is modified then it is actualized by the playersTransporterService
  if(this._playersTransporterService.getPlayers() != undefined) {
    this.playerlist = this._playersTransporterService.getPlayers();
  }
}

//Opens the playerDetailComponent
watchPlayerDetails(idObtained: number){
  this._playerObtainerService.setPlayers(this.playerlist);
  this.idChosen = idObtained;
}

//Closes the playerDetailComponent
closeDetails(flag: string) {
  if(flag == "true") {
    this.idChosen = -1;
  }
}


createPlayer(){
  this._playerObtainerService.setPlayers(this.playerlist);
  this.router.navigate(['/admin/create-player']);
}


updatePlayer(idObtained: number){
  this._playerObtainerService.setPlayers(this.playerlist);
  this._playersTransporterService.setPlayers(this.playerlist);
  this.router.navigate(['/admin/modify-player', idObtained]);
}


removePlayer(idObtained: number) {
  for(var i = 0; i < this.playerlist.length; i++) {
    if(this.playerlist[i].id == idObtained) {
      this.playerlist.splice(i, 1);
      this.table.renderRows();
    }
  }
}

 

}
