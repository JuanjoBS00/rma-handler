import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/player-interface';
import { Router } from '@angular/router';
import { PlayerObtainerService } from 'src/app/services/player-gestion/player-obtainer.service';
import { PlayerTransporterService } from 'src/app/services/player-gestion/player-transporter.service';
import { PlayerModifierService } from 'src/app/services/player-gestion/player-modifier.service';

@Component({
  selector: 'app-modify-player',
  templateUrl: './modify-player.component.html',
  styleUrls: ['./modify-player.component.scss']
})
export class ModifyPlayerComponent implements OnInit {

  public id!: number;
  player!: Player;
  originalPlayers!: Player[];
  finalPlayers!: Player[];


  constructor(private route: ActivatedRoute, private _playerObtainerService: PlayerObtainerService, 
    private router: Router, private _playerModifierService: PlayerModifierService, 
    private _playerTransporterService: PlayerTransporterService) { }
    

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.player = this._playerObtainerService.search(this.id);
      this.originalPlayers = this._playerTransporterService.getPlayers();
  }

  modifyPlayer() {
    this._playerModifierService.setPlayer(this.player);
    this._playerModifierService.setPlayers(this.originalPlayers);
    this.finalPlayers = this._playerModifierService.modify();
    this._playerTransporterService.setPlayers(this.finalPlayers);
    this.router.navigate(['/admin/players']);
  }

}
