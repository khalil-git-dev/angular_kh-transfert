import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }
  compteNewPartenaire(dataCpt: any) {
    //console.log(dataCpt);
    return this.http.post<any>(`${environment.apiUrl}/api/compteNewPartenaire`, dataCpt);

  }

      // FAIRE UN DEPOT
  faireDepot(donneDepot: any) {
    return this.http.post<any>(`${environment.apiUrl}/api/faire_depot`, donneDepot);

  }
      //
  getCompte() {
    return this.http.get(`${environment.apiUrl}/api/allCompte`);
  }


}
