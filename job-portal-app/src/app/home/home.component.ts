import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';  // Import HeaderComponent here

import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from '../feature/feature.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HttpClientModule, CommonModule, NgbRatingModule, FeatureModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  popularJobs: any;
  trendingJobs: any;
  newJobs: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getTrendingJobs();
    this.getPopularJobs();
    this.getNewJobs();
  }

  getTrendingJobs() {
    this.http.get('http://localhost:4200/assets/data/trending-jobs.json').subscribe((jobs) => {
      this.trendingJobs = jobs;

    });
  }

  getPopularJobs() {
    this.http.get('http://localhost:4200/assets/data/popular-jobs.json').subscribe((jobs) => {
      this.popularJobs = jobs;

    });

  }
  getNewJobs() {
    this.http.get('http://localhost:4200/assets/data/new-jobs.json').subscribe((jobs) => {
      this.newJobs = jobs;

    });

  }

  goToJob(type: string, id: string) {
    this.router.navigate(['jobs', type, id]);
  }

}
