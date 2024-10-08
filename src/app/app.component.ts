import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-basics';
  isVisible = true;

  onInput = (event: Event) => {
    this.title = (<HTMLInputElement>event.target).value;
    console.log((<HTMLInputElement>event.target).value);
  };

  onClick = (event: Event) => {
    this.title = 'Ho cliccato sul bottone!';
  };
}
