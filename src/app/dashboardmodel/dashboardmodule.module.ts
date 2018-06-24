import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {  HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AppRouterModule } from '../app-router/app-router.module';
import { PaymentservicesService } from '../services/paymentservices.service';
import { TransactionComponent } from '../paymentstransfer/transaction/transaction.component';
import { DashboardRouterModule } from '../app-router/dashboard-router/dashboard-router.module';
import { HistoryComponent } from '../paymentstransfer/history/history.component';
import { DirectivesharedmodModule } from '../modules/directivesharedmod/directivesharedmod.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRouterModule,
    DashboardRouterModule,
    DirectivesharedmodModule
  ],
  declarations: [DashboardComponent, TransactionComponent, HistoryComponent],
  providers: [PaymentservicesService]
})
export class DashboardmodelModule { }
