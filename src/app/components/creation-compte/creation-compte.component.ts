import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CompteService } from '../../services/compte.service';

@Component({
  selector: 'app-creation-compte',
  templateUrl: './creation-compte.component.html',
  styleUrls: ['./creation-compte.component.scss']
})
export class CreationCompteComponent implements OnInit {

  formCreationCompte: FormGroup;
  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.formCreationCompte = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      tel: new FormControl(''),
      adresse: new FormControl(''),
      username: new FormControl(''),
      ninea: new FormControl(''),
      rc: new FormControl(''),
      montant: new FormControl(''),
    });
}
    // CREATION COMPTE NEW PARTENAIRE
  onSubmitNewCompte() {
    const compte = {
      email: this.formCreationCompte.value.email,
      password: this.formCreationCompte.value.password,
      tel: this.formCreationCompte.value.tel,
      adresse: this.formCreationCompte.value.adresse,
      username: this.formCreationCompte.value.username,
      ninea: this.formCreationCompte.value.ninea,
      rc: this.formCreationCompte.value.rc,
      montant: this.formCreationCompte.value.montant
    };
    console.log(compte);
    this.compteService.compteNewPartenaire(compte).subscribe(
      // data => {
      //   alert(JSON.data));
      // }
    );


    }
    
}
