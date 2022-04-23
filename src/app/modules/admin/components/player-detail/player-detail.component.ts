import { Component, OnInit, Input, Output,  EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/player-interface';
import { PlayerObtainerService } from 'src/app/services/player-gestion/player-obtainer.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  @Input() id = -1; 
  @Output() flag = new EventEmitter<string>(); 

  player!: Player;

  constructor(private actRoute: ActivatedRoute, private _playerObtainerService: PlayerObtainerService ) { }

  ngOnInit(): void {
    this.player = this._playerObtainerService.search(this.id);
  }

  closeOrder() {
    this.flag.emit("true");
  }

}
