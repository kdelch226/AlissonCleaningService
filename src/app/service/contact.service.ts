import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact:string='';
  constructor() { }

   SetContact(contactt:string):void{
      this.contact=contactt;
   }

   GetContact(){
    return this.contact;
   }
  
}
