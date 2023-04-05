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
    this.world.message = "";
    this.reset();
  }
  subscribeToRoomsChanged(){
    this.apiService.currentAppRoom.subscribe(world => {     
      this.world = world;
    })
    
  }

  //Timer
  ms: any = '0' + 0;
  sec: any = '0' + 0;
  min: any = '0' + 0;
  hr: any = '0' + 0;

  startTimer: any;
  running = false;

  start(): void{
    if(!this.running){
      
      this.running = true;
      this.startTimer = setInterval(() => {
        this.didPlayerWin();
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;

        if(this.ms === 100){
          this.sec++;
          this.sec = this.sec < 10 ? '0' + this.sec : this.sec;
          this.ms = '0' + 0;
        }

        if(this.sec === 60){
          this.min++;
          this.min = this.min < 10 ? '0' + this.min : this.min;
          this.sec = '0' + 0;
        }

        if(this.min === 60){
          this.hr++;
          this.hr = this.hr < 10 ? '0' + this.hr : this.hr;
          this.min = '0' + 0;
        }
      }, 10);
    }
    else{
      this.stop();
    }
  }

  stop(): void{
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(): void{
    clearInterval(this.startTimer);
    this.running = false;
    this.hr = this.min = this.sec = this.ms = '0' + 0;
  }
 
  didPlayerWin() : boolean{
    if(this.world.message === "YOU WON!!!" ){
      this.stop();
      this.world.message = "";
      return true;
    }
    else{
      return false;
    }
  }
}