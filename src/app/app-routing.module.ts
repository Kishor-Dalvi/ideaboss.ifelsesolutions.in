import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { OurOfferingsComponent } from './components/our-offerings/our-offerings.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LoginComponent } from './containers/login/login.component';
import { NoPageComponent } from './page-not-found/no-page/no-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
 
  { path: '', component:DashboardComponent,
    children: [
      { path: '', component:HomeComponent},
      { path: 'home', component:HomeComponent},
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'ourTeam', component: OurTeamComponent },
      { path: 'ourOffering', component:OurOfferingsComponent},
    ]
  },
  { path: '**',component:NoPageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
