import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  get historial() {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GifsService) {}

  buscar(termino:string)
  {
    this.gifsService.buscarGifs(termino);
  }

   
  }


function buscar() {
  throw new Error('Function not implemented.');
}

function termino(termino: any) {
  throw new Error('Function not implemented.');
}

