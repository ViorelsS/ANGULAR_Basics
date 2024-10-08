import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../services/servizio-prova.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css',
})
export class ProvaComponent implements OnInit {
  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log(this.servizioProva.persone);
  }
}
