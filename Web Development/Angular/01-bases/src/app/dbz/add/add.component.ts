import { Component, /*EventEmitter, */ Input, /* Output */ } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  @Input() characters: Character[] = [];
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService) { }

  public new: Character = {
    name: '',
    power: 0
  }

  public add() {
    if (this.new.name.trim().length !== 0) {
      // this.characters.push({
      //   name: this.new.name,
      //   power: this.new.power
      // });

      // this.onNewCharacter.emit(this.new);

      this.dbzService.addCharacter(this.new);

      this.new = {
        name: '',
        power: 0
      }
    }
  }
}
