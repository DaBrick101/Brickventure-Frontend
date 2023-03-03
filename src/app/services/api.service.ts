import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'
import { Room } from '../shared/room.model';

@Injectable()
export class ApiService{
    constructor(private http: HttpClient){
        this.loadRooms();
    }

    getRooms: any[] = [];
    appRooms: Room[] = [];
    partecipants: number[] = [];
    private appRoomsObs = new BehaviorSubject<Room[]>([]);
    currentAppRoom = this.appRoomsObs.asObservable();

    loadRooms(){
        //this.http.get('https://localhost:7149/api/brickventureAPI/CreatePlayer')
        this.http.get('https://localhost:7149/api/brickventureAPI/GetWorldGameField')
        .subscribe((response: any[])=>{

            this.getRooms = response;
          
            this.getRooms.forEach(room => {                           
                this.appRooms.push(
                    new Room(
                        room.roomType,
                        this.partecipants,
                        room.wasVisitedByPlayer,
                        room.x,
                        room.y,
                        room.z
                    )
                )
            });
        });
        
        this.appRoomsObs.next(this.appRooms);
    }

    public provideRooms(){
        return this.appRooms;
    }
}