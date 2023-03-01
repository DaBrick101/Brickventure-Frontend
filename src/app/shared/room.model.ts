export class Room{
    public RoomType : number;
    public Participants : number[];//change number to Partecipants Model
    public WasVisitedByPlayer: boolean;
    public X : number;
    public Y : number;
    public Z : number;

    constructor(RoomType : number,Participants: number[],  WasVisitedByPlayer: boolean, X:number,Y:number, Z:number){ // add partecipants again
        this.RoomType = RoomType;
        this.Participants = Participants;
        this.WasVisitedByPlayer = WasVisitedByPlayer;
        this.X = X;
        this.Y  = Y;
        this.Z = Z;

    }
}