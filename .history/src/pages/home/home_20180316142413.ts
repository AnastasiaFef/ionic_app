import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/observable/IfObservable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public favouriteFilms: Observable<any>;

  constructor(public navCtrl: NavController) {

  }

}
