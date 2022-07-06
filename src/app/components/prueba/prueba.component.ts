import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent {
  type = 'button';
  colors: string[] = [];
  name = 'gregor lopez';

  onClick(event: MouseEvent) {
    console.log('click me', event);
    this.type = 'submit';
  }
}
