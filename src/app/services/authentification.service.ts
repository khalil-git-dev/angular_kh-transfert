import { Role } from './../models/role';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private currentUserSubject: BehaviorSubject<User>;

  // BehaviorSubject pour le USER objet
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
   }

  // le getteur du currentUserSubject sous typeScript
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getConnexion(user: User) {
    console.log(environment.apiUrl);
    return this.httpClient.post<User>(`${environment.apiUrl}/login_check`, user).
    // se qui nous permet d'intercepter la requette pour y injecter le token
    pipe(map( user => {
      //(stocker dans le local storage du navigateur) store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));
  }

  getRoles() {
    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);
  }

}
