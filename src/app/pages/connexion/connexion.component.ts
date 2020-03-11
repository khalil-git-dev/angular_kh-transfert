import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private auth: AuthentificationService) { }
  roles;
  ngOnInit() {
  }
  // onRoles() {
  //   // on souscrit pour avoir acces au donnees roles (en faisant du propriety baining)
  //   this.auth.getRoles().subscribe(
  //     mesRoles => {
  //       // le (hydra:member) permet de d'accesder aux donnees c'est comme le fetch sous php
  //       this.roles = mesRoles['hydra:member'];
  //     }
  //   );
  // }
}
