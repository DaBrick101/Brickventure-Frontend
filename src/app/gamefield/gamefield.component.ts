import { Component, EventEmitter, Output, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../services/api.service'
import {Room} from 'src/app/shared/room.model';
import { RoomComponent } from '../room/room.component';

@Component({
  selector: 'app-gamefield',
  templateUrl: './gamefield.component.html',
  styleUrls: ['./gamefield.component.css']
})

export class GamefieldComponent implements OnChanges {

  appRooms: Room[] = [];
  answer: string;
  roomList: RoomComponent[] = [];
  testArray: number[] = [1,2,3]
  // rows: Number = 4;
  // columns: Number = 10;

  constructor(private data: ApiService) {
    this.loadRooms();
    console.log(this.appRooms); 
    console.log(this.appRooms.length)

    for(let i = 0; i < 10; i++ ){
      console.log("test");
      console.log(this.appRooms[i]);

    }
    // this.appRooms.forEach(room => {
    //   console.log(room)
    //   // this.roomList.push(new RoomComponent(room.X, room.Y));
    //   // console.log(this.roomList);
    //   // console.log(this.appRooms);
      
    // })
    // this.roomList = [];
    // for (let i = 0; i < this.rows; i++) {
    //   this.roomList[i] = [];
    //   for (let j = 0; j < this.columns; j++) {
    //     this.roomList[i][j] = new RoomComponent(i, j);
    //   }  
    // }
  }
  ngOnChanges(){
    this.data.currentAppRoom.subscribe(appRooms => this.appRooms = appRooms)
  }
  loadRooms(){
    this.data.currentAppRoom.subscribe(appRooms => this.appRooms = appRooms)
  }
}

