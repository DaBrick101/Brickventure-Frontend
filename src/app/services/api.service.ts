import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import { Room } from '../shared/room.model';
import { World } from '../shared/world.model';

@Injectable()
export class ApiService{
    constructor(private http: HttpClient){
        this.loadRooms();
    }

    world: World = new World;
    appRooms: Room[] = [];
    private appRoomsObs = new BehaviorSubject<World>(this.world);
    currentAppRoom = this.appRoomsObs.asObservable();

    loadRooms() {
        //this.http.get('https://localhost:7149/api/brickventureAPI/CreatePlayer')
        this.http.get('https://localhost:7149/api/brickventureAPI/GetWorldGameField')

        .subscribe((response: World)=> {

           this.assignGameFieldValues(response);

        });
    }

    moveUp() {
        this.http.get('https://localhost:7149/api/brickventureAPI/MoveUp')

        .subscribe((response: World)=> {

            this.assignGameFieldValues(response);
        });
    }
    moveDown() {
        this.http.get('https://localhost:7149/api/brickventureAPI/MoveDown')

        .subscribe((response: World)=> {

            this.assignGameFieldValues(response);
        });
    }
    moveRight() {
        this.http.get('https://localhost:7149/api/brickventureAPI/MoveRight')

        .subscribe((response: World)=> {

            this.assignGameFieldValues(response);
        });
    }
    moveLeft() {
        this.http.get('https://localhost:7149/api/brickventureAPI/MoveLeft')

        .subscribe((response: World)=> {

            this.assignGameFieldValues(response);
        });
    }
    attack() {
        this.http.get('https://localhost:7149/api/brickventureAPI/Attack')

        .subscribe((response: World)=> {

            this.assignGameFieldValues(response);
        });
    }
    defend() {
        this.http.get('https://localhost:7149/api/brickventureAPI/Defend')

        .subscribe((response: World)=> {

            this.assignGameFieldValues(response);
        });
    }
    restart() {
        this.http.get('https://localhost:7149/api/brickventureAPI/Restart')

        .subscribe((response: World)=> {

            this.assignGameFieldValues(response);
        });
    }
    public assignGameFieldValues(response: World){
        this.world = response;
        this.appRooms = [];
        this.world.gameField.forEach(room => {
            this.appRooms.push(room);
        });
        this.appRoomsObs.next(this.world);
    }
    public provideRooms(){
        return this.appRooms;
    }

    startTimer() {
        setInterval(() => {
            this.loadRooms();
        }, 500);
      }
    }