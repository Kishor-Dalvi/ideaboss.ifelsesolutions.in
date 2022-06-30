import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurOfferingsComponent } from './components/our-offerings/our-offerings.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LoginComponent } from './containers/login/login.component';
import {FooterComponent} from './containers/footer/footer.component'
import {HeaderComponent} from './containers/header/header.component'
import { MaterialModule } from './material/material/material.module';
import { NoPageComponent } from './page-not-found/no-page/no-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    OurOfferingsComponent,
    OurTeamComponent,
    ContactUsComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
