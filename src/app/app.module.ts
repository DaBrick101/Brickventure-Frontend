import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { GamefieldComponent } from './gamefield/gamefield.component';
import { ChunkPipe } from './shared/chunk.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { GamfieldTouchComponent } from './gamfield-touch/gamfield-touch.component';
import { BrickventureEggComponent } from './brickventure-egg/brickventure-egg.component';
import { TimerComponent } from './timer/timer.component';
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    GamefieldComponent,
    ChunkPipe,
    GamfieldTouchComponent,
    BrickventureEggComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
