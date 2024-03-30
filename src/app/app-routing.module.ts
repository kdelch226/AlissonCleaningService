import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeclientComponent } from './pages/website/homeclient/homeclient.component';
import { HomeadminComponent } from './pages/admin/homeadmin/homeadmin.component';
import { ServiceadminComponent } from './pages/admin/serviceadmin/serviceadmin.component';
import { LoginadminComponent } from './pages/admin/loginadmin/loginadmin.component';
import { AdminAutGardService } from './service/admin-aut-gard.service';
import { NavbaradminComponent } from './pages/admin/navbaradmin/navbaradmin.component';
import { NavbarclientComponent } from './pages/website/navbarclient/navbarclient.component';
import { ServiceclientComponent } from './pages/website/serviceclient/serviceclient.component';
import { RendezVousclientComponent } from './pages/website/rendez-vousclient/rendez-vousclient.component';
import { ProposComponent } from './pages/website/proposclient/propos.component';
import { ConfirmRendezVousComponent } from './pages/website/confirm-rendez-vous/confirm-rendez-vous.component';
import { ConfirmRDVService } from './service/confirm-rdv.service';


const routes: Routes = [
  /*
  {path:'login', component:LoginadminComponent},
  {
    path:'',
    component:NavbaradminComponent,
    canActivate:[AdminAutGardService],
    children:[
      {
        path:'serviceadmin',
        component:ServiceadminComponent,
        canActivate:[AdminAutGardService],
      },
      {
        path:'homeadmin',
        component:HomeadminComponent,
        canActivate:[AdminAutGardService],
      },
    ]
  },*/      
  {path:'acceuil',component:HomeclientComponent},
  {path:'services',component:ServiceclientComponent},
  {path:'rendez-vous',component:RendezVousclientComponent},
  {path:'a-propos',component:ProposComponent},
  {path:'rendez-vous-confirmer', component:ConfirmRendezVousComponent,canActivate:[ConfirmRDVService]},
  {path:'',redirectTo:'/acceuil',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
