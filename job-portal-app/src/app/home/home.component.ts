import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';  // Import HeaderComponent here
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HttpClientModule, CommonModule, NgbRatingModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  trendingJobs: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingJobs();

  }

  getTrendingJobs() {
    this.http.get('http://localhost:4200/assets/data/trending-jobs.json').subscribe((jobs) => {
      this.trendingJobs = jobs;
      console.log(this.trendingJobs);
    });



  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }
}
