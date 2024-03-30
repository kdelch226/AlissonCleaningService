import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdmindataService } from '../../../service/admindata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrl: './loginadmin.component.css'
})
export class LoginadminComponent {

  loginObj: any ={
    userName:'',
    passWord:''
  }

  constructor(private adminService: AdmindataService,private router:Router){}

  onLogin(){
    this.adminService.login(this.loginObj.userName,this.loginObj.passWord).subscribe(isLoggedIn => {
      console.log(isLoggedIn);
      if (isLoggedIn) {
        // Rediriger l'utilisateur vers la page d'accueil de l'administration ou effectuer d'autres actions nécessaires
        this.router.navigateByUrl('/homeadmin')
      } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
      }
    });
  }
//    this.router.navigateByUrl('/navbaradmin')


}
