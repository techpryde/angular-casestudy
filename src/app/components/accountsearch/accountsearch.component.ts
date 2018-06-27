import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountsearch',
  templateUrl: './accountsearch.component.html',
  styleUrls: ['./accountsearch.component.css']
})
export class AccountsearchComponent implements OnInit {

  private acctNo : String;

  constructor() { }

  ngOnInit() {
  }

  submitAccountSearch(){
    if(this.acctNo.length>=10 && this.acctNo.length<=20){
      alert("hello");
    }
    else{
      alert("invalid");
    }
  }
  onRightClick(event){
    return false;
  }

}
