import { createInjectableType } from '@angular/compiler';
import { Component, Injectable, OnInit, Inject, Input} from '@angular/core';
import { Room } from '../shared/room.model';



@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})


export class RoomComponent{

  @Input() room: Room;
    
}

