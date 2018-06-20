import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule,Routes } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AppComponent } from '../app.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { AuthhandlerService } from '../authsession/authhandler.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes:Routes=[
  {
    "path":'login',"component":AuthenticationComponent
  },
  {
    "path":"","component":WelcomePageComponent
  },
  {
    "path":'dashboard/v1',"component":DashboardComponent,canActivate:[AuthhandlerService]
  }
];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRouterModule { }
