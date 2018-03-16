import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public favouriteFilms$: Observable<any>; // add $ to the end of observable
  constructor(public navCtrl: NavController, http: HttpClient) {
    this.favouriteFilms$ = http.get('https://api.myjson.com/bins/x5g4x')
  }
}
