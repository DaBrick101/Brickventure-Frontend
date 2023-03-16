import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Room } from '../shared/room.model';
import { World } from '../shared/world.model';
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

  message : string;

  private roomListObs = new BehaviorSubject<Room[][]>([]);
  currentRoomList = this.roomListObs.asObservable();
  
  constructor(private apiService: ApiService) {
   this.subscribeToRoomsChanged();
  }

  subscribeToRoomsChanged(){
    this.apiService.currentAppRoom.subscribe(world => {
      
      world.gameField.forEach(room => {
        this.roomList[room.y][room.x].Assign(room);
      })
      this.message = world.message;
      this.roomListObs.next(this.roomList);
    })
  }
  getRoom(x : number, y : number){
   
    return this.roomList[x][y];
  }
  getMessage(){
    return this.message;
  }
}
