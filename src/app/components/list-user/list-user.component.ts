import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: any;
  private router: Router;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
        //console.log(data);
      }
    );
  }
  deconnexion(router: ActivatedRouteSnapshot) {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  onChangeStatut(id: number) {
    this.userService.changeStatus(id).subscribe(
      data => {
        alert(JSON.stringify(data["message"]));
        // POUR RAFRECHIR LA PAGE PAS 
        this.userService.getUsers().subscribe(
          data => {
            this.users = data;
          }
        );
    });
  }
}

