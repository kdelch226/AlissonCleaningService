import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../../../service/contact.service';

@Component({
  selector: 'app-confirm-rendez-vous',
  templateUrl: './confirm-rendez-vous.component.html',
  styleUrl: './confirm-rendez-vous.component.css'
})
export class ConfirmRendezVousComponent implements OnInit {

  contact:string='';
  constructor(private contactt:ContactService){}
  
  ngOnInit(): void {
    this.contact=this.contactt.GetContact()
  }
}
