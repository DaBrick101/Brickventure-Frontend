import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import {Room} from 'src/app/shared/room.model';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-gamefield',
  templateUrl: './gamefield.component.html',
  styleUrls: ['./gamefield.component.css']
})

export class GamefieldComponent implements OnInit {

  appRooms: Room[];
  // rows: Number = 4;
  // columns: Number = 10;

  roomList: RoomComponent[];
  
  constructor(private data: ApiService) {
    
    // this.roomList = [];
    // for (let i = 0; i < this.rows; i++) {
    //   this.roomList[i] = [];
    //   for (let j = 0; j < this.columns; j++) {
    //     this.roomList[i][j] = new RoomComponent(i, j);
    //   }  
    // }
  }
  ngOnInit(){
    this.data.currentAppRoom.subscribe(appRooms => this.appRooms = appRooms)
    console.log(this.appRooms);
  }
}

