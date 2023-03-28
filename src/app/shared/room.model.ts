import { Partecipant } from "./partecipant.model";

export class Room{
    public roomType : number;
    public partecipants : Partecipant[];
    public WasVisitedByPlayer: boolean;
    public isActive : number = 1;
    public x : number = 0;
    public y : number = 0;
    public z : number = 0;

    Assign(room: Room){ 
        this.roomType = room.roomType;
        this.partecipants = room.partecipants;
        this.WasVisitedByPlayer = room.WasVisitedByPlayer;
        this.isActive = room.isActive;
        this.x = room.x;
        this.y  = room.y;
    }
    IsEnemyRoom():boolean {
        return this.roomType == 0;
    }
    
    ContainsPlayer():boolean {
        return this.ContainsPartecipantOfType(1);
    }

    ContainsEnemy():boolean {
        return this.ContainsPartecipantOfType(2);
    }
    
    private ContainsPartecipantOfType(partecipantType: number): boolean {

        var found: boolean = false;
        if(this.partecipants !== undefined) {
            this.partecipants.forEach(partecipant => {
                if(partecipant.partecipantType == partecipantType ){
                    found = true;
                }
            });
        }
        return found;
    }
}