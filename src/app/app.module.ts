import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, RouterOutlet} from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ExponentDashboardComponent } from './exponent-dashboard/exponent-dashboard.component';
import { VisitorDashboardComponent } from './visitor-dashboard/visitor-dashboard.component';
import { VisitorNavBarComponent } from './visitor-dashboard/visitor-nav-bar/visitor-nav-bar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ExponentNavBarComponent } from './exponent-dashboard/exponent-nav-bar/exponent-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    AuthenticationComponent,
    ExponentDashboardComponent,
    VisitorDashboardComponent,
    VisitorNavBarComponent,
    RegistrationComponent,
    ExponentNavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
