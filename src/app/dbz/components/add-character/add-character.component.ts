import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/personajes.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    nombre: '',
    power: 0,
  };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.nombre.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = { nombre: '', power: 0 };
  }
}
