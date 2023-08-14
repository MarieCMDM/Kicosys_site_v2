import { Component } from '@angular/core';
import { RedirectService } from 'src/app/services/redirect.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {

  constructor(private redirect: RedirectService) {}

  contatticlick() {
    this.redirect.goTo('contatti');    
  }

}
