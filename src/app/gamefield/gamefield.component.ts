import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import {Room} from 'src/app/shared/room.model';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-gamefield',
  templateUrl: './gamefield.component.html',
  styleUrls: ['./gamefield.component.css']
})

export class GamefieldComponent{

  constructor(private apiService: ApiService) {
    
    apiService.loadRooms();
    
}
}

