import { PrincipalModule } from './pages/principal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt-interceptor.service';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { BartopComponent } from './components/bartop/bartop.component';
import { AjoutUserComponent } from './components/ajout-user/ajout-user.component';
import { AuthGuard } from './helpers/auth.guard';
import { CreationCompteComponent } from './components/creation-compte/creation-compte.component';
import { FaireDepotComponent } from './components/faire-depot/faire-depot.component';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    FormConnexionComponent,
    ListUserComponent,
    BartopComponent,
    AjoutUserComponent,
    CreationCompteComponent,
    FaireDepotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PrincipalModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
