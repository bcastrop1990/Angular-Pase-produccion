import { Injectable } from '@angular/core';
import { Character } from '../interfaces/personajes.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public listPers: Character[] = [
    {
      id: uuid(),
      nombre: 'Krilin',
      power: 1500,
    },
    {
      id: uuid(),
      nombre: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      nombre: 'Napa',
      power: 3000,
    },
    {
      id: uuid(),
      nombre: 'Frizer',
      power: 1000000,
    },
  ];

  newCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };
    this.listPers.push(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    //console.log('pageMain: ' + personaEliminar.power);
    //this.listPers.splice(personaEliminar.power, 1);
    this.listPers.splice(index, 1);
  }

  deleteById(id: string): void {
    this.listPers = this.listPers.filter((personaje) => personaje.id != id);
  }

  constructor() {}
}
