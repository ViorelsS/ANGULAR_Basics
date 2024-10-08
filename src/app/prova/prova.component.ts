import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css',
})
export class ProvaComponent implements OnInit {
  isDisabled = false;
  immagine = '';
  immagine1 = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1wyN7FRrwyiBOKcWePNb8r9QyOLegzy52zg&s`;
  immagine2 = `https://material.angular.io/assets/img/examples/shiba2.jpg`;

  constructor() {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    let counter = 0;
    setInterval(() => {
      if (counter % 2 == 0) {
        this.immagine = this.immagine1;
      } else {
        this.immagine = this.immagine2;
      }
      counter++;
    }, 1000);
  }
}
