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
  player: Partecipant;
  playerInRoom: boolean;
  enemyInRoom: boolean;
  isActive: boolean;

  constructor(private roomService : RoomService){
    
  }
  ngOnInit(): void {
  
    this.subscribeToRoomsChanged();
    this.room = this.roomService.getRoom(this.X, this.Y);
    this.setRoom(this.room);
  }

  public setRoom(room: Room) {
    this.playerInRoom = false;
    this.enemyInRoom = false;
 
    this.room = room;
    
    
    if (this.room.roomType == 0){
      this.imageUrl = "assets/imgs/EnemyFinal.png"
    }
    else if(this.room.roomType == 1){
      if(this.room.isActive == 1){
        this.imageUrl = "assets/imgs/HealFinal.png"
      }
      else{
        this.imageUrl = "assets/imgs/HealFinalInactive.png"
      }
      
    }
    else if(this.room.roomType == 2){
      this.imageUrl = "assets/imgs/SpawnFinal.png"
    }
    
    if(this.room.wasVisitedByPlayer == false){
      this.imageUrl = "assets/imgs/FogFinal.png"
    }
    if(this.room.ContainsPlayer() && this.room.ContainsEnemy()) {
      this.imageUrl = "assets/imgs/FightingFinal.png"
    }
    else if (this.room.ContainsPlayer()) {
      this.imageUrl = "assets/imgs/BrickFinal.png"
    }
    else if(this.room.IsEnemyRoom() && !this.room.ContainsEnemy()) {
      this.imageUrl = "assets/imgs/EnemyFinalDead.png"
    }
  }
   subscribeToRoomsChanged(){
    this.roomService.currentRoomList.subscribe(appRooms => {
      this.room = this.roomService.getRoom(this.X, this.Y);
      this.setRoom(this.room)
    })
  }
}




