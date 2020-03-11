import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // injection de dependance du (HttpClient) le link Back/Front
  constructor(private http: HttpClient) { }
  enregistrer(data: any) {
    //console.log(data);
    return this.http.post<any>(`${environment.apiUrl}/api/users`, data);
  }

  getUsers() {
   return this.http.get(`${environment.apiUrl}/api/getListeUsers`);
  }

  changeStatus(id: number) {
    return this.http.get(`${environment.apiUrl}/api/changeStatus/${id}`);
  }
}
