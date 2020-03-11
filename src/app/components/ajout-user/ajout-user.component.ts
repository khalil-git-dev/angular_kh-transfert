import { UserService } from './../../services/user.service';
import { RoleService } from './../../services/role.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {
  roles: any;
  formAjoutUser: FormGroup;
  constructor(private roleService: RoleService, private userService: UserService) { }

  ngOnInit() {
    this.formAjoutUser = new FormGroup({
      email: new FormControl(''),
      password : new FormControl(''),
      username : new FormControl(''),
      adresse : new FormControl(''),
      telephone : new FormControl(''),
      role : new FormControl()
      });
    this.roleService.getRoles().subscribe(
      data => {
        this.roles = data;
        console.log(data);
      }
    );
  }

  onSubmit() {
    const user = {
      email: this.formAjoutUser.value.email,
      password: this.formAjoutUser.value.password,
      username: this.formAjoutUser.value.username,
      adresse: this.formAjoutUser.value.adresse,
      tel: this.formAjoutUser.value.telephone,
      role: `api/roles/${this.formAjoutUser.value.role}`
    };
    this.userService.enregistrer(user).subscribe(
      // data => {
      //   alert(JSON.stringify(data));
      // }
    );
  }


}
