import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { JobDialogComponent } from './job-dialog/job-dialog.component';



export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs/:type/:id', component: JobsComponent,  },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'notification', component: NotificationComponent },
  { path: '**', component: LoginComponent },
  
];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule, HttpClientModule, CommonModule],
  exports: [RouterModule],
  

})

export class AppRoutingModule { }
