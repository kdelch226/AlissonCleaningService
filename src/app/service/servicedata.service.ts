import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Valeur } from '../model/valeurs';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
  /*

  private url = '://localhost:3000/services';
  private services= {} as Valeur [];

  constructor(private http: HttpClient) { }

  getService():Observable<Valeur[]>{
    return this.http.get<any[]>(this.url).pipe(
      map(serv => {
        for(let i of serv){
          const a: Valeur = {
            id: i.id,
            name: i.name,
            description: i.description,
            image: i.image
        };        
        this.services.push(a);
      }
        // Retourner les services
        console.log(this.services);
        return this.services;
      }),      
      catchError(error => {
        // Gérer l'erreur de la requête HTTP ici
        console.error('Une erreur s\'est produite lors de la requête HTTP :', error);
        return of(
          [{
            id: 1,
            name: "La satisfaction de nos clients",
            description: "Nous nous engageons à dépasser les attentes de nos clients à chaque étape de notre prestation de service.",
            image: "/assets/img1.png"
          },
          {
            id: 2,
            name: "Qualité premium, prix abordables",
            description: "Nous offrons des produits et des services de qualité à des prix compétitifs.",
            image: "/assets/img2.png"
          }]
        ); // Retourner un observable de false pour indiquer que la connexion a échoué
      }),
    );
  }*/
  
  services: Valeur[] = [
    {
      id: 1,
      name: "Nettoyage professionnel",
      description: `Offrez-vous une tranquillité d'esprit immaculée avec notre service de nettoyage professionnel. Que ce soit pour vos bureaux, vos maisons, vos appartements, vos usines, vos magasins, vos bâtiments publics, vos centres de santé ou tout autre local commercial ou professionnel, notre équipe dévouée et expérimentée est là pour répondre à tous vos besoins de nettoyage. Nous comprenons l'importance d'un environnement propre et hygiénique, c'est pourquoi nous mettons un point d'honneur à fournir des services de nettoyage de la plus haute qualité. Notre approche personnalisée garantit que chaque espace est nettoyé selon vos exigences spécifiques, utilisant des techniques de nettoyage avancées et des produits écologiques pour assurer des résultats exceptionnels tout en préservant votre santé et celle de l'environnement. Qu'il s'agisse d'un nettoyage régulier, d'un nettoyage en profondeur ou d'un nettoyage après sinistre, vous pouvez compter sur nous pour vous offrir un service fiable et de qualité, chaque fois.`,
      image: "assets/img1.png",
    },
    {
      id: 2,
      name: "Dératisation",
      description: `Dites adieu aux nuisibles avec notre service de dératisation professionnel. Les rats et les rongeurs peuvent causer des dommages considérables à votre propriété et représenter un risque pour votre santé et votre sécurité. Chez nous, nous comprenons l'urgence de ce problème et nous sommes là pour vous aider à le résoudre efficacement. Notre équipe de spécialistes certifiés possède l'expertise nécessaire pour éliminer les infestations de rats et de souris de manière rapide, sûre et efficace. Nous commençons par effectuer une évaluation approfondie de votre propriété pour identifier les points d'entrée et les zones problématiques. Ensuite, nous utilisons des méthodes avancées et des produits sans danger pour éradiquer les nuisibles et prévenir leur retour. Notre objectif est de vous offrir une solution de dératisation complète et durable, vous permettant de retrouver la tranquillité d'esprit dans votre maison ou votre entreprise.`,
      image: "assets/img2.png",
    },
    {
      id: 3,
      name: "Décontamination",
      description: `La décontamination est essentielle pour assurer un environnement sûr et sain. Que ce soit suite à un sinistre, à une contamination biologique ou chimique, ou simplement pour garantir la propreté de vos locaux, notre service de décontamination est là pour vous aider. Notre équipe d'experts qualifiés utilise des techniques de décontamination avancées et des produits approuvés pour éliminer en toute sécurité les substances nocives et les contaminants de votre environnement. Nous comprenons l'importance de ce processus et nous nous engageons à fournir des services de décontamination de la plus haute qualité. Nous travaillons avec vous pour développer un plan personnalisé qui répond à vos besoins spécifiques, en tenant compte de la nature de la contamination, de l'étendue des dommages et des exigences réglementaires. Notre objectif est de vous offrir une solution de décontamination complète et efficace, vous permettant de retrouver un environnement propre, sûr et sain.`,
      image: "assets/img4.png",
    },
    {
      id: 4,
      name: "Désinfection de bâtiments",
      description: `La désinfection est essentielle pour éliminer les bactéries, les virus et autres agents pathogènes des surfaces et des espaces intérieurs. Avec notre service de désinfection de bâtiments, vous pouvez être sûr que votre environnement est propre, sûr et protégé contre les maladies infectieuses. Nous utilisons des désinfectants puissants et des techniques de pointe pour tuer les germes et réduire le risque de contamination croisée. Que ce soit pour votre bureau, votre magasin, votre école ou tout autre bâtiment commercial ou résidentiel, nous sommes là pour vous aider à maintenir un environnement propre et sécurisé pour tous. Nous comprenons l'importance de la désinfection dans la prévention de la propagation des maladies infectieuses, c'est pourquoi nous mettons un point d'honneur à fournir des services de désinfection de la plus haute qualité, adaptés à vos besoins spécifiques.`,
      image: "assets/img1.png",
    },
    {
      id: 5,
      name: "Vente de Produits",
      description: `En plus de nos services de nettoyage, nous proposons une vaste gamme de produits de nettoyage de qualité professionnelle et d'équipements de nettoyage. Que vous ayez besoin de produits de nettoyage spécifiques, de matériel de nettoyage professionnel ou d'accessoires pour votre entreprise, nous avons tout ce qu'il vous faut. Nous travaillons avec les meilleures marques du marché pour vous garantir des produits fiables et efficaces. Notre équipe expérimentée est là pour vous conseiller et vous aider à choisir les produits et équipements les mieux adaptés à vos besoins. Nous mettons un point d'honneur à fournir des produits de la plus haute qualité, pour vous permettre d'obtenir des résultats exceptionnels à chaque utilisation.`,
      image: "assets/img2.png",
    },
    {
      id: 6,
      name: "Jardinage",
      description: `Prenez soin de votre espace extérieur avec notre service de jardinage professionnel. Que vous ayez besoin d'entretien régulier pour votre jardin, d'une taille d'arbres ou d'arbustes, d'une tonte de pelouse, d'un désherbage ou de la plantation de nouvelles fleurs et plantes, notre équipe de jardiniers expérimentés est là pour vous aider. Nous comprenons l'importance de maintenir un jardin propre, sain et bien entretenu, c'est pourquoi nous mettons un point d'honneur à fournir des services de jardinage de la plus haute qualité. Notre approche personnalisée garantit que chaque aspect de votre jardin est pris en charge selon vos exigences spécifiques, pour vous offrir des résultats exceptionnels à chaque saison. Que ce soit pour votre maison, votre entreprise ou votre communauté, nous sommes là pour vous aider à créer et à entretenir un espace extérieur magnifique et accueillant.`,
      image: "assets/img4.png",
    },
    {
      id: 7,
      name: "Nettoyage de piscine",
      description: `Profitez d'une piscine propre et saine avec notre service de nettoyage de piscine professionnel. Nous comprenons l'importance de maintenir une piscine propre et bien entretenue, c'est pourquoi nous mettons un point d'honneur à fournir des services de nettoyage de la plus haute qualité. Notre équipe expérimentée utilise des techniques de nettoyage avancées et des équipements spécialisés pour éliminer efficacement les débris, les algues et les contaminants de votre piscine. Nous commençons par nettoyer les parois et le fond de la piscine, en enlevant tous les débris et les feuilles flottantes. Ensuite, nous vérifions et ajustons le pH de l'eau pour garantir un équilibre chimique optimal. Nous nettoyons également les filtres et les skimmers pour assurer un fonctionnement efficace du système de filtration. Enfin, nous traitons l'eau avec des produits chimiques de qualité professionnelle pour maintenir sa clarté et sa propreté. Avec notre service de nettoyage de piscine, vous pouvez profiter d'une piscine propre et rafraîchissante tout au long de la saison.`,
      image: "assets/img1.png",
    }
];


  constructor() { }

  GetServices(){
    return this.services;
  }

  GetServicesName(){
    let names:string[]=[];
    this.services.forEach(serv =>{
      names.push(serv.name)
    })
    return names;
  }
}
