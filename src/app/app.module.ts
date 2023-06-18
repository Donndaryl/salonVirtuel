import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, RouterOutlet} from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    FooterComponent,
    AuthenticationComponent
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
