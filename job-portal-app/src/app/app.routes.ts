import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';



export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs/:type/:id', component: JobsComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule, HttpClientModule, CommonModule],
  exports: [RouterModule],
  

})

export class AppRoutingModule { }
