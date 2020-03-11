import { AjoutUserComponent } from './components/ajout-user/ajout-user.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { AuthGuard } from './helpers/auth.guard';
import { CreationCompteComponent } from './components/creation-compte/creation-compte.component';
import { FaireDepotComponent } from './components/faire-depot/faire-depot.component';


const routes: Routes = [
  { path: 'login', component: ConnexionComponent },
 {
    path: '',
     component: PrincipalComponent ,
     children: [
       {
        path: 'list/users',
        component: ListUserComponent,
        canActivate: [AuthGuard]
       },
       {
        path: 'ajout/user',
        component: AjoutUserComponent,
        canActivate: [AuthGuard]
       },
       {
         path: 'creation/compte',
         component: CreationCompteComponent,
         canActivate: [AuthGuard]
       },
       {
        path: 'depot',
        component: FaireDepotComponent,
        canActivate: [AuthGuard]
      }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
