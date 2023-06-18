import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  userEmail: string | undefined;
  userPassword: string | undefined;
   lastParam: boolean | undefined;
  constructor(private route: ActivatedRoute,private router: Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.lastParam = params['status'];
       // Use the lastParam as needed
    });
  }

  connexion(): number{
    if(this.userEmail != '' && this.userPassword != ''){
      alert(this.lastParam)
      if (this.lastParam == true){
        this.router.navigate(['visitor/'+1], )
      }else{
        this.router.navigate(['visitor/'+1], )
      }
    }
    return 1;
  }

  redirectToVisitorReg(): void{
    this.router.navigate(['visitorReg/'], )
  }
}
