import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirect.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
  
  isServiziPage: boolean = false

  constructor(private redirect: RedirectService, public router: Router) { }

  checkIsServiziPage () {
    switch (this.router.url) {
      case '/servizi':
        this.isServiziPage = true;
        break;
      case '/servizi/biomeccanica_applicata':
        this.isServiziPage = true;
        break;
      case '/servizi/preparazioni_atletiche':
        this.isServiziPage = true;
        break;
      case '/servizi/valutazione_funzionale':
        this.isServiziPage = true;
        break;
      case '/servizi/valutazione_baropodometriche':
        this.isServiziPage = true;
        break;
      case '/servizi/progettazioni_plantari':
        this.isServiziPage = true;
        break;
      case '/servizi/indoor_cycling_program':
        this.isServiziPage = true;
        break;
      case '/servizi/fitness_wellness_personal':
        this.isServiziPage = true;
        break;
      default:
        this.isServiziPage = false;
        break;
    }
    console.log(this.router.url)
    return this.isServiziPage;
  }

  contatticlick() {
    this.redirect.goTo('contatti');    
  }

  introClick() {
    this.redirect.goTo('servizi');
  }

  biomeccanicaClick() {
    this.redirect.goTo('servizi/biomeccanica_applicata');
  }

  preparazioniClick() {
    this.redirect.goTo('servizi/preparazioni_atletiche');
  }

  valFunzClick() {
    this.redirect.goTo('servizi/valutazione_funzionale');
  }
  
  valBarClick() {
    this.redirect.goTo('servizi/valutazione_baropodometriche');
  }

  plantariClick() {
    this.redirect.goTo('servizi/progettazioni_plantari');
  }

  indoorClick() {
    this.redirect.goTo('servizi/indoor_cycling_program');
  }

  fitnessClick() {
    this.redirect.goTo('servizi/fitness_wellness_personal');
  }

  
}

