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
  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true },
    { nome: 'marco', cognome: 'verdi', isOnline: false },
    { nome: 'anna', cognome: 'neri', isOnline: false },
    { nome: 'leonardo', cognome: 'pannochia', isOnline: true },
    { nome: 'flavio', cognome: 'babbo', isOnline: false },
  ];

  onInput = (event: Event) => {
    this.title = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  };

  onClick = (event: Event) => {
    this.title = 'Ho cliccato sul bottone!';
  };
}
