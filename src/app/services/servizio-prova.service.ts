import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // é disponibile a qualsiasi componente --> sta nel div con classe root del file html
})
export class ServizioProvaService {
  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: false, color: 'green' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'red' },
    { nome: 'leonardo', cognome: 'pannochia', isOnline: true, color: 'yellow' },
    { nome: 'flavio', cognome: 'babbo', isOnline: false, color: 'brown' },
  ];

  constructor() {}
}
