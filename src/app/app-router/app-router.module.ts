import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule,Routes } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { AppComponent } from '../app.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';

const routes:Routes=[
  {
    "path":'login',"component":AuthenticationComponent
  },
  {
    "path":"","component":WelcomePageComponent
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
