export class Transaction {
    private acctId : String;
    private acctNo : String;
    private brCod : String;
    private ctryName : String;
    private clntId : String;
    private amount : number;
    constructor(private acctId1 : String,
    private acct : String,
    private brCode : String,
    private ctryName1 : String,
    private clntId1 : String){
      this.acctId=acctId1;
      this.acctNo=acct;
      this.brCod=brCode;
      this.ctryName=ctryName1;
      this.clntId=clntId1;
    }

    getAcctId(): String{
      return this.acctId;
    }
    getAcctNo(): String{
      return this.acctNo;
    }
    getBrCod(): String{
      return this.brCod;
    }
    getCtryName(): String{
      return this.ctryName;
    }
    getClntId(): String{
      return this.clntId;
    }



}
