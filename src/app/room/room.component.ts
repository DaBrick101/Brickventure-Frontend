import { Component, Input, OnInit} from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../shared/room.model';



@Component({
  selector: 'app-roomComponent',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit{

  @Input() X: number;
  @Input() Y: number;
 
  room: Room;
  imageUrl: string;

  constructor(private roomService : RoomService){
    
  }
  ngOnInit(): void {
    this.room = this.roomService.getRoom(this.X, this.Y);
    this.setRoom(this.room)
  }
  
  setRoom(room: Room) {
    this.room = room;
    //if (this.room.roomType == 0){
      this.imageUrl = "./src/app/imgs/EnemyFinal.png"
    //}
  }
  
}


