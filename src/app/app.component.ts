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
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('inputSaluti') valoreInput!: ElementRef<HTMLInputElement>;

  valore = 'ciao';

  title = 'corso-angular';
  persone = [
    { nome: 'luca', cognome: 'rossi', isOnline: true, color: 'blue' },
    { nome: 'marco', cognome: 'verdi', isOnline: false, color: 'green' },
    { nome: 'anna', cognome: 'neri', isOnline: false, color: 'red' },
    { nome: 'leonardo', cognome: 'pannochia', isOnline: true, color: 'yellow' },
    { nome: 'flavio', cognome: 'babbo', isOnline: false, color: 'brown' },
  ];

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.valoreInput);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.valoreInput);
  }

  onClick() {
    console.log(this.valoreInput.nativeElement.value);
  }
}
