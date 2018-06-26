import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) { }

  irPara(pagina: string) {
    console.log('Página: ' + pagina);
  }

}
