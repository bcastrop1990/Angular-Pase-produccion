import { Component } from '@angular/core';
import { Character } from '../interfaces/personajes.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponet {
  constructor(private dbzService: DbzService) {}

  get obternerListaPersonajes(): Character[] {
    return this.dbzService.listPers;
  }

  onDeleteByID(id: string): void {
    this.dbzService.deleteById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.newCharacter(character);
  }
}
