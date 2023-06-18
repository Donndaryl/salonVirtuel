import {inject, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {VisitorDashboardComponent} from "./visitor-dashboard/visitor-dashboard.component";
import {ExponentDashboardComponent} from "./exponent-dashboard/exponent-dashboard.component";
import {RegistrationComponent} from "./registration/registration.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'home', component: HomeComponent },
  { path: 'authentication/:status', component:  AuthenticationComponent},
  { path: 'visitor/:id', component:  VisitorDashboardComponent},
  { path: 'exponent/:id', component:  ExponentDashboardComponent},
  {path: 'visitorReg',component: RegistrationComponent},
  /*{ path: '**', component: NotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
