import { Component, Input, OnInit} from '@angular/core';
import { RoomService } from '../services/room.service';
import { Partecipant } from '../shared/partecipant.model';
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
  counterConstructor: number;
  counterOninit: number;
  currentPartecipant: Partecipant;

  constructor(private roomService : RoomService){
    
    console.log("I am the Constructor" + " " +this.counterConstructor);
    this.counterConstructor++;
  }
  ngOnInit(): void {
    console.log("I am the OnInit" + " " +  this.counterOninit);
    this.counterOninit++;

    this.room = this.roomService.getRoom(this.X, this.Y);
    this.setRoom(this.room)
   
  }
  
  setRoom(room: Room) {
    //TODO The First Room has to be checked after displaying

    this.room = room;
    console.log("Room now gets checked for type")

    this.room.partecipants.forEach(partecipant => {

      if(partecipant.partecipantType == 1){
        this.currentPartecipant = partecipant
      }
    });
    if(this.currentPartecipant.partecipantType == 1){
      this.imageUrl = "assets/imgs/BrickFinal"
    }
    else if (this.room.roomType == 0){
      this.imageUrl = "assets/imgs/EnemyFinal.png"
    }
    else if(this.room.roomType == 1){
      this.imageUrl = "assets/imgs/HealFinal.png"
    }
    else if(this.room.roomType == 2){
      this.imageUrl = "assets/imgs/SpawnFinal.png"
    }
    
  }
}


