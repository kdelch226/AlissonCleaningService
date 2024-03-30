import { Component, OnInit } from '@angular/core';
import { ServicedataService } from '../../../service/servicedata.service';
import { Router } from '@angular/router';
import { ConfirmRDVService } from '../../../service/confirm-rdv.service';
import { ContactService } from '../../../service/contact.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { from } from 'rxjs';


@Component({
  selector: 'app-rendez-vousclient',
  templateUrl: './rendez-vousclient.component.html',
  styleUrl: './rendez-vousclient.component.css'
})

export class RendezVousclientComponent implements OnInit {
  formData = {
    nom: '',
    mail: '',
    telephone: '',
    objet:'',
    budget: '',
    ville: '',
    date: '',
    heure: '',
    description: ''
  };

  servicename: string[]=[];//pour creer la boucle de serve dans objet



  constructor(private servnames:ServicedataService,private router: Router,private confirm:ConfirmRDVService,private contactt:ContactService){}

  
  ngOnInit(): void {
    this.servicename=this.servnames.GetServicesName();
  }
  
  submitForm(): void {
    // Validation des champs obligatoires
    if (!this.formData.nom  || !this.formData.telephone || !this.formData.budget || !this.formData.date || !this.formData.heure || !this.formData.objet  ) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Validation du format du téléphone
    let phonePattern = /^\+?[0-9]{1,}$/;
    if (!phonePattern.test(this.formData.telephone)) {
      alert('Veuillez entrer un numéro de téléphone valide');
      return;
    }
  
    // Validation du format du budget
    let budgetPattern = /^[0-9]{1,}$/;
    if (!budgetPattern.test(this.formData.budget)) {
      alert('Veuillez entrer un montant de budget valide');
      return;
    }
  
    // Validation du format de l'adresse e-mail
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (this.formData.mail && !emailPattern.test(this.formData.mail)) {
      alert('Veuillez entrer une adresse e-mail valide');
      return;
    }
  
    // Si toutes les validations sont réussies, envoyer le formulaire
    this.envoyerFormulaire();
  }

    async sendConfirmationMail(){

      emailjs.init('FaRbPYN-AqfvnN4Jn');
      const message = await emailjs.send('service_c6b794q','template_172c2oq',{
      from_name:'AlissonCleaningService',
      to_name:this.formData.nom,
      date:this.formData.date,
      heure:this.formData.heure,
      objet:this.formData.objet,
      description:this.formData.description,
    });
    
    console.log('test envoie mail')

  }
  envoyerFormulaire(): void {
    // Envoyer le formulaire au serveur ou effectuer d'autres actions nécessaires
    this.contactt.SetContact(this.formData.telephone);
    this.confirm.formulaireConfirme(true);
    this.router.navigate(['/rendez-vous-confirmer']);
    this.sendConfirmationMail();
  }
}
