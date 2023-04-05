import { Component } from '@angular/core';

@Component({
  selector: 'app-brickventure-egg',
  templateUrl: './brickventure-egg.component.html',
  styleUrls: ['./brickventure-egg.component.css']
})
export class BrickventureEggComponent {

  easterEggEnabled: boolean = false;

  enableEasteregg(){
    this.easterEggEnabled = !this.easterEggEnabled;
  }
}
