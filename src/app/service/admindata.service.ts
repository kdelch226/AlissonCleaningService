import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class AdmindataService {

  private url = '://localhost:3000/teamadmin';
  private isLoggedIn=false;

  constructor(private http: HttpClient) { }

   // Méthode pour vérifier les informations d'identification de l'administrateur
   login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.url).pipe(
      map(admins => {
        const admin = admins.find(a => a.userName === username && a.passWord === password);
        this.isLoggedIn= admin !== undefined;
        return this.isLoggedIn
      }),
      
      catchError(error => {
        // Gérer l'erreur de la requête HTTP ici
        console.error('Une erreur s\'est produite lors de la requête HTTP :', error);
        return of(false); // Retourner un observable de false pour indiquer que la connexion a échoué
      })
    );
  }

  isAdminLoggedIn():boolean{
    return this.isLoggedIn;
  }
  
}
