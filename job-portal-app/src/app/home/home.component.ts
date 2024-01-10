import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';  // Import HeaderComponent here

import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from '../feature/feature.module';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingJobs();
    this.getPopularJobs();
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

  }



