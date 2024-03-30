import { Injectable } from '@angular/core';
import { Valeur } from '../model/valeurs';

@Injectable({
  providedIn: 'root'
})
export class ValeursService {

  valeurs: Valeur[] = [
    {
      id: 1,
      name: "La satisfaction de nos clients",
      description: "Nous nous engageons à dépasser les attentes de nos clients à chaque étape de notre prestation de service.",
      image: "assets/img1.png",
    },
    {
      id: 2,
      name: "Qualité premium, prix abordables",
      description: "Nous offrons des produits et des services de qualité à des prix compétitifs.",
      image: "assets/img2.png"
    },
    {
      id: 3,
      name: "Intégrité professionnelle",
      description: "Nous agissons avec intégrité et responsabilité dans nos interactions professionnelles et processus de recrutement et de formation",
      image: "assets/img3.png"
    },
    {
      id: 4,
      name: "Transparence et communication",
      description: "Nous favorisons la transparence et la communication ouverte pour mieux servir nos clients.",
      image: "assets/img4.png"
    },
];


  constructor() { }

  GetValeurs(){
    return this.valeurs;
  }

}
