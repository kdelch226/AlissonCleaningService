import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfirmRDVService implements CanActivate{

  confirmation:boolean=false;
  constructor(private router:Router) { }
  formulaireConfirme(confirm:boolean){
    if(confirm) this.confirmation=true;
    else this.confirmation=false;
  }
  
  canActivate():boolean{
    if(!this.confirmation){
      this.router.navigate(['/acceuil']);
      return false;
    }  

    return true;
  }
}
