import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {
  formConnexion: FormGroup;
  constructor(private auth: AuthentificationService, private router: Router) { }

  ngOnInit() {
    this.formConnexion = new FormGroup({
      email: new FormControl(''),
      password  : new FormControl(''),
    });
  }

  onConnexion() {
    //console.log(this.formConnexion.value);
    const user = {
      email: this.formConnexion.value.email,
      password: this.formConnexion.value.password
    };
    // data represente les donnees retourner
    this.auth.getConnexion(user).subscribe(
      data => {
        this.router.navigate(['']);
      },
      error => {
        console.log('error de connexion' + error);
      }
    );
  }
}
