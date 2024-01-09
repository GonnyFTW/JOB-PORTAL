import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { HeaderComponent } from './header/header.component'
import { JobsComponent } from './jobs/jobs.component'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    JobsComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HomeComponent
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
