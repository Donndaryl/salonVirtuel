import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isVisitor: boolean | undefined;
  constructor(private router: Router) { }

  userStatus(value: boolean){
    this.isVisitor = value
    this.router.navigate(['authentication/'+this.isVisitor], { queryParams: { status: this.isVisitor } });
  }
}
