import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works12!';
  @Input() imgPath:string = "../../src/res/";
  imgFileName:string = "logo.png";
}
