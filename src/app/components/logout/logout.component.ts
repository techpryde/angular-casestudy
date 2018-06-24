import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authservice:AuthserviceService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authservice.logOut();
    this.router.navigate(['/'],{replaceUrl:true});
  }

}
