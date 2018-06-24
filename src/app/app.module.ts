import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AppRouterModule } from './app-router/app-router.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AuthserviceService } from './services/servicesindex';
import { AuthhandlerService } from './authsession/authhandler.service';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardmodelModule } from './dashboardmodel/dashboardmodule.module';
import { DirectivesharedmodModule } from './modules/directivesharedmod/directivesharedmod.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRouterModule,
    DashboardmodelModule,
    DirectivesharedmodModule
  ],
  providers: [AuthserviceService, AuthhandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
