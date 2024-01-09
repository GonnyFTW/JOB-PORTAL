import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent, HeaderComponent],
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]

})

export class AppRoutingModule { }
