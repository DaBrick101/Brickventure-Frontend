import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { World } from '../shared/world.model';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-gamfield-touch',
  templateUrl: './gamfield-touch.component.html',
  styleUrls: ['./gamfield-touch.component.css']
})
export class GamfieldTouchComponent {
  http: any;
  world : World;
  constructor(private apiService: ApiService) {
    this.world = new World();
    this.subscribeToRoomsChanged();
    this.apiService.startTimer();
    
  }
  //TODO Add Key mapping and events
  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 

    if(event.key == "w"){
      this.moveUp();
    }
    else if(event.key == "d"){
      this.moveRight();
    }
    else if(event.key== "s"){
      this.moveDown();
    }
    else if(event.key == "a"){
      this.moveLeft();
    }
    else if(event.key == "q"){
      this.attack();
    }
    else if(event.key == "e"){
      this.defend();
    }
 }
  refresh(){
    window.location.reload();
  }
  moveUp(){
    this.apiService.moveUp();
  }
  moveDown(){
    this.apiService.moveDown();
  }
  moveRight(){
    this.apiService.moveRight();
  }
  moveLeft(){
    this.apiService.moveLeft();
  }
  attack(){
    this.apiService.attack();
  }
  defend(){
    this.apiService.defend();
  }
  restart(){
    this.apiService.restart();
  }
  subscribeToRoomsChanged(){
    this.apiService.currentAppRoom.subscribe(world => {     
      this.world = world;
    })
  }
 
}