import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RedirectService {

  constructor(private router: Router) { }

  goTo(page: string) {
    (<any>this.router).navigate([page]);
  }

  goToAndRefresh(page: string) {
    (<any>this.router).navigate([page])
    .then(() => {
      window.location.reload();
    });   
  }
  
}




