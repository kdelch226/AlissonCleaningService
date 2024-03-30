import { Injectable } from '@angular/core';
import { AdmindataService } from './admindata.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAutGardService implements CanActivate{

  constructor(private verifService: AdmindataService,private router: Router) { }

  canActivate():boolean{
    console.log(this.verifService.isAdminLoggedIn());
    if(this.verifService.isAdminLoggedIn()){
      return true;
    }
    else{
      this.router.navigateByUrl('/login');
      return false}
  }
}
