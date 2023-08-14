import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  mybutton = document.getElementById("up")!;
  title = 'Kicosys_site_v2';

  backToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    this.mybutton.style.display = "block";
    } else {
    this.mybutton.style.display = "none";
    }
  }
  
}
