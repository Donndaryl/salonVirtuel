import {inject, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticationComponent} from "./authentication/authentication.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'home', component: HomeComponent },
  { path: 'authentication', component:  AuthenticationComponent},
  /*{ path: '**', component: NotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
