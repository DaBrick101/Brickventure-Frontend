import { Injectable } from '@angular/core';
import { Room } from '../shared/room.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  roomList: Room[][] = [
  [new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room()],
  [new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room()],
  [new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room()],
  [new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room()],
  [new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room(), new Room()]
];
  rowIndex: number;
  columnIndex: number;

  constructor(private apiService: ApiService) {
    this.subscribeToRoomsChanged();
  }

  subscribeToRoomsChanged(){
    this.apiService.currentAppRoom.subscribe(appRooms => {
      
      this.rowIndex = 0;
      this.columnIndex = 0;

      appRooms.forEach(room => {
        console.log(room);
        this.roomList[room.y][room.x].Assign(room);
      })
    })
  }
  getRoom(x : number, y : number){
    return this.roomList[x][y];
  }
}
