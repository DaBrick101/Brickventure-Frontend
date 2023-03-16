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
  player: Partecipant;
  playerInRoom: boolean;
  enemyInRoom: boolean;

  constructor(private roomService : RoomService){
    
    this.counterConstructor++;
  }
  ngOnInit(): void {
    this.counterOninit++;
    this.room = this.roomService.getRoom(this.X, this.Y);
    this.setRoom(this.room);
    this.subscribeToRoomsChanged();
  }

  public setRoom(room: Room) {
    this.playerInRoom = false;
    this.enemyInRoom = false;
 
    this.room = room;
    this.room.WasVisitedByPlayer
    
    if (this.room.roomType == 0){
      this.imageUrl = "assets/imgs/EnemyFinal.png"
    }
    else if(this.room.roomType == 1){
      this.imageUrl = "assets/imgs/HealFinal.png"
    }
    else if(this.room.roomType == 2){
      this.imageUrl = "assets/imgs/SpawnFinal.png"
    }
    else if(this.room.x == 0 && this.room.y == 0){
      this.imageUrl = "assets/imgs/EnemyFinal.png"
    }
    this.room.partecipants.forEach(partecipant => {
      if(partecipant.partecipantType == 1){
        
        this.playerInRoom = true;
        this.player = partecipant;
        this.imageUrl = "assets/imgs/BrickFinal.png"
        
      }
      if(partecipant.partecipantType == 2 ){
        this.enemyInRoom = true;
      }
    });   
    if(this.playerInRoom && this.enemyInRoom){
      this.imageUrl = "assets/imgs/FightingFinal.png"
    }

    if(this.room.roomType == 0 && this.enemyInRoom == false){
      this.imageUrl = "assets/imgs/EnemyFinalDead.png"
    }
    this.room.partecipants.forEach(partecipant => {
      if(partecipant.partecipantType == 1){
        
        this.playerInRoom = true;
        this.player = partecipant;
        this.imageUrl = "assets/imgs/BrickFinal.png"
      }
      if(partecipant.partecipantType == 2 ){
        this.enemyInRoom = true;
      }
    });  
    if(this.playerInRoom && this.enemyInRoom){
      this.imageUrl = "assets/imgs/FightingFinal.png"
    } 
    
  }
   subscribeToRoomsChanged(){
    this.roomService.currentRoomList.subscribe(appRooms => {
      this.room = this.roomService.getRoom(this.X, this.Y);
      this.setRoom(this.room)
    })
  }
}




