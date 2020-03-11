import { Component, OnInit } from '@angular/core';
import { CompteService } from 'src/app/services/compte.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-faire-depot',
  templateUrl: './faire-depot.component.html',
  styleUrls: ['./faire-depot.component.scss']
})
export class FaireDepotComponent implements OnInit {
  formulaireDopot: FormGroup;
  comptes: any;
  constructor(private compteService: CompteService) { }

  ngOnInit() {
    this.formulaireDopot = new FormGroup({
      compte: new FormControl(''),
      montant : new FormControl('')
      });
      // tslint:disable-next-line: align
      this.compteService.getCompte().subscribe(
        dataCompte => {
          this.comptes = dataCompte;
        }
      );
    }

  onSubmitDepo() {
    const depot = {
      compte: this.formulaireDopot.value.compte,
      montant: this.formulaireDopot.value.montant
    };
    this.compteService.faireDepot(depot).subscribe(
      data => {
        alert(JSON.stringify(depot));
      }
    );
}

}
