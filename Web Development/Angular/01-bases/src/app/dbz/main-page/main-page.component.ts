import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(/*private dbzService: DbzService */) { }

  // public changeName(event: Event) {
  //   console.log(event.target);
  // }

  addNewCharacter(character: Character) {

    // this.dbzService.characters.push(character);
  }

}
