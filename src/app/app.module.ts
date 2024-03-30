import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeclientComponent } from './pages/website/homeclient/homeclient.component';
import { ServiceclientComponent } from './pages/website/serviceclient/serviceclient.component';
import { RendezVousclientComponent } from './pages/website/rendez-vousclient/rendez-vousclient.component';
import { ProposComponent } from './pages/website/proposclient/propos.component';
import { ProposadminComponent } from './pages/admin/proposadmin/proposadmin.component';
import { RendezVousadminComponent } from './pages/admin/rendez-vousadmin/rendez-vousadmin.component';
import { ServiceadminComponent } from './pages/admin/serviceadmin/serviceadmin.component';
import { HomeadminComponent } from './pages/admin/homeadmin/homeadmin.component';
import { LoginadminComponent } from './pages/admin/loginadmin/loginadmin.component';
import { DisponibiliteadminComponent } from './pages/admin/disponibiliteadmin/disponibiliteadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbaradminComponent } from './pages/admin/navbaradmin/navbaradmin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { NavbarclientComponent } from './pages/website/navbarclient/navbarclient.component';
import { CardComponent } from './card/card.component';
import { ConfirmRendezVousComponent } from './pages/website/confirm-rendez-vous/confirm-rendez-vous.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeclientComponent,
    ServiceclientComponent,
    RendezVousclientComponent,
    ProposComponent,
    ProposadminComponent,
    RendezVousadminComponent,
    ServiceadminComponent,
    HomeadminComponent,
    LoginadminComponent,
    DisponibiliteadminComponent,
    NavbaradminComponent,
    NavbarclientComponent,
    CardComponent,
    ConfirmRendezVousComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    AccordionModule.forRoot(),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
