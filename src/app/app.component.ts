import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-basics';
  isVisible = true;
  numero = 7;
  color = 'blue';

  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: false, color: 'green' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'red' },
    { nome: 'leonardo', cognome: 'pannochia', isOnline: true, color: 'yellow' },
    { nome: 'flavio', cognome: 'babbo', isOnline: false, color: 'brown' },
  ];

  onInput = (event: Event) => {
    this.title = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  };

  onClick = (event: Event) => {
    this.title = 'Ho cliccato sul bottone!';
  };

  cambiaColoreEvidenziatore = (colore: string) => {
    this.color = colore;
  };
}
