import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private router: Router) { }

  ngOnInit() { //Back on top on new route
    this.router.events.subscribe((event) => {
        if (!(event instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  }

  mybutton = document.getElementById("up")!;


  backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }  
}
