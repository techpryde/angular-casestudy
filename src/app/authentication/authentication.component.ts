import { Component, OnInit } from '@angular/core';

import { AuthserviceService } from '../services/authservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  private username: string;
  loading: boolean = false;
  returnUrl: string;
  private notValidUser : boolean=false;

  user: any = {};
  constructor(private route: ActivatedRoute,
    private router: Router, private authservice: AuthserviceService) { }

  ngOnInit() {
   this.authservice.logOut();
   // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   this.returnUrl='dashboard/v1';
  }


  login() {
    //  console.log("login");
      this.loading = true;
      this.notValidUser=false;
    this.authservice.login(this.user.username, this.user.password).subscribe(data => {
      this.loading = false;
        if (data && data.status) {
          this.router.navigate([this.returnUrl]);
        }
        else{

          this.notValidUser=true;
        }
    }, error => {
      console.log("error"+error);
        this.loading = false;
    });
  }

}
