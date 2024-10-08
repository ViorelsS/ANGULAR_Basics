import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'corso-angular';
  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: false, color: 'green' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'red' },
    { nome: 'leonardo', cognome: 'pannochia', isOnline: true, color: 'yellow' },
    { nome: 'flavio', cognome: 'babbo', isOnline: false, color: 'brown' },
  ];

  onClick = () =>
    (this.persone = [
      { nome: 'AAA', cognome: 'rossi', isOnline: true, color: 'blue' },
      { nome: 'BBBB', cognome: 'verdi', isOnline: false, color: 'green' },
      { nome: 'CCCC', cognome: 'neri', isOnline: false, color: 'red' },
      { nome: 'DDDD', cognome: 'pannochia', isOnline: true, color: 'yellow' },
      { nome: 'EEEEE', cognome: 'babbo', isOnline: false, color: 'brown' },
    ]);
}
