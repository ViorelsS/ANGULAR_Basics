import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ServizioProvaService } from './services/servizio-prova.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  today = Date.now();
  numero = 5.9274641275;
  title = 'corso-angular';

  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log(this.servizioProva.persone);
  }
}
