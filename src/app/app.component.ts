import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cleaning';
  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo(0, 0); // Faites défiler la page vers le haut lorsque la navigation est terminée
      });
    }
  }
}
