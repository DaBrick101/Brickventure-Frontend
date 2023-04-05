import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { RoomService } from './services/room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService){
    apiService.loadRooms();
    roomservice : RoomService;
  }
  
  title = 'Brickventure';

  unlockEgg(){
    
  }
}
