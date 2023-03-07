export class Room{
    public roomType : number;
    public partecipants : number[];//change number to Partecipants Model
    public WasVisitedByPlayer: boolean;
    public x : number = 0;
    public y : number = 0;
    public z : number = 0;

    Assign(room: Room){ 
        this.roomType = room.roomType;
        this.partecipants = room.partecipants;
        this.WasVisitedByPlayer = room.WasVisitedByPlayer;
        this.x = room.x;
        this.y  = room.y;
        

    }
    //  constructor(RoomType : number,Participants: number[],  WasVisitedByPlayer: boolean, X:number,Y:number, Z:number){ // add partecipants again
    //     this.RoomType = RoomType;
    //     this.Participants = Participants;
    //     this.WasVisitedByPlayer = WasVisitedByPlayer;
    //     this.X = X;
    //     this.Y  = Y;
    //     this.Z = Z;

    // }
}