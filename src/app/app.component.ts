import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Raclette party 🧀';

  isThisIngredientVital: boolean = true;

  displayGuestList: boolean = true;

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon", "Viens boire un p’tit coup à la maison"];

  showMovie: boolean = true;

  viewMovie() {
    this.showMovie = !this.showMovie;
  }


}
