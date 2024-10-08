import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>;

  today = Date.now();

  numero = 5.9274641275;

  title = 'corso-angular';
  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: false, color: 'green' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'red' },
    { nome: 'leonardo', cognome: 'pannochia', isOnline: true, color: 'yellow' },
    { nome: 'flavio', cognome: 'babbo', isOnline: false, color: 'brown' },
  ];
}
