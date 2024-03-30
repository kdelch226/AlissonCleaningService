import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarclient',
  templateUrl: './navbarclient.component.html',
  styleUrl: './navbarclient.component.css'
})
export class NavbarclientComponent {
  isCollapse:boolean=true;

  constructor(){}
  
  //cacher la nar de navigation au cas ou 
  hideNavbar(){
    this.isCollapse=true
  }
}
