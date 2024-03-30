import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrl: './navbaradmin.component.css'
})
export class NavbaradminComponent {
  isCollapse:boolean=true;

   // Gère les clics sur la page entière
   @HostListener('document:click', ['$event'])
   onClick(event: MouseEvent) {
     const target = event.target as HTMLElement;
     const navbar = document.querySelector('.container');
 
     // Vérifie si le clic se produit à l'intérieur de la barre de navigation
     const isInsideNavbar = navbar?.contains(target);
 
     // Ferme la barre de navigation si le clic se produit en dehors de celle-ci et que la barre est ouverte
     if (!isInsideNavbar && this.isCollapse==false) {
      this.isCollapse=true;
     }
   }
}
