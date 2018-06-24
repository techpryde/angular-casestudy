import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule,Routes } from '@angular/router';
import  { TransactionComponent,HistoryComponent } from "../../paymentstransfer/paymentsindex";
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { AuthhandlerService } from '../../authsession/authhandler.service';
const routes:Routes=[
  {
    "path":'payments/transaction',"component":TransactionComponent,canActivate:[AuthhandlerService]
  },
  {
    "path":'dashboard/v1',"component":DashboardComponent,canActivate:[AuthhandlerService]
  },
  {
    "path":'dashboard/v1/history',"component":HistoryComponent,canActivate:[AuthhandlerService]
  }
];
@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class DashboardRouterModule { }
