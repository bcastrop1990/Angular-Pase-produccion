import { Character } from './../../interfaces/personajes.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public listaPersonajes: Character[] = [];

  public personajeEliminar: Character = {
    nombre: '',
    power: 0,
  };

  @Output()
  public onDeleteByID: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    //this.listaPersonajes.splice(index, 1);
    //this.onDelete.emit(index);
    this.onDeleteByID.emit(id);
    //this.onDelete.emit(this.personajeEliminar);
  }
}
