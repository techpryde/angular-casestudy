import { Component, OnInit ,ElementRef,ViewChild} from '@angular/core';
import  { Transaction } from "../../models/Transaction";
import { PaymentservicesService } from '../../services/paymentservices.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

//  @ViewChild('paymentinit') private accountDetails;

  private transaction:any ={
      acctId:'',
      acctNo:'',
      brCod:'',
      clntId:'',
      address:'',
      ctryName:'',
      acctName:'',
      acctAddress:'',
      amount:'',
      tranMessage:''

  };
  private beneficiary:any={
    beneName:'',
    beneAcctNo:'',
    beneAddress:''
  };

  transactionDetail=null;
  constructor(private paymentservices:PaymentservicesService,private ef:ElementRef) { }

  ngOnInit() {
    this.initiatePayment();
  }

  onRightClick(event){
    return false;
  }
  showBranchLookup(event){
    alert("hello");
  }

  initiatePayment(){
    //  paymentservices.fetchUseAccount()
  }

  submitTransaction(event){
    //alert("submit");
    if(this.transaction.acctNo!='' && this.transaction.acctName!='' && this.beneficiary.beneAcctNo!='' && this.beneficiary.beneName!=''){
      if(this.transaction.amount!=''){
        alert(Number(this.transaction.amount));
      }
  }
  }

  collapseAccountDetail(panel){
  //  console.log("hello");
    panel.classList.remove("show");
  }

}
