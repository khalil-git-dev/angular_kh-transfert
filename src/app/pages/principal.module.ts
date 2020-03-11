import { PrincipalComponent } from './principal/principal.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './../components/sidebar/sidebar.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SidebarComponent, PrincipalComponent
        ],
    imports: [ CommonModule, RouterModule,
        // FlexLayoutModule
        ],
    exports: [],
    providers: [],
})
export class PrincipalModule {

}