import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AppRouterModule } from './app-router/app-router.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

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
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
