import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor (private router: RedirectService) { }

  goToAtleti() {
    this.router.goTo('atleti');
  }

  goToServizi() {
    this.router.goTo('servizi');
  }

  goToTestPoint() {
    this.router.goTo('testpoint');
  }

  goToEventi() {
    this.router.goTo('eventi');
    alert("PAGINA IN COSTRUZIONE");
  }
  
}
