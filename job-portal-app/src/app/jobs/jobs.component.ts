import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from '../feature/feature.module';
import { HeaderComponent } from '../header/header.component';
import { JobApplicationService } from '../services/job-application.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [HeaderComponent, HttpClientModule, CommonModule, NgbRatingModule, FeatureModule, FormsModule],

  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})

export class JobsComponent implements OnInit {
  type = '';
  id = '';
  url = '';
  jobs: any;
  job: any;

  newReview = {
    author: '',
    rating: 0,
    review: ''
  };

  submittedReview?: {
    author: string;
    rating: number;
    review: string;
    published_on: Date;
  } = undefined;

  applicationSuccess = false;
  showApplicationForm = false;
  applicantName = '';
  applicantSurname = '';
  applicantGender = 'male';
  applicantAge = 0;
  applicantDescription = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private jobApplicationService: JobApplicationService) {
    this.submittedReview = {
      author: '',
      rating: 0,
      review: '',
      published_on: new Date(),
    };
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-jobs.json';
    }

    if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-jobs.json';
    }

    if (this.type === 'new') {
      this.url = 'http://localhost:4200/assets/data/new-jobs.json';
    }

    this.getJob();
  }

  getJob() {
    this.http.get(this.url).subscribe((jobs) => {
      this.jobs = jobs;
      let index = this.jobs.findIndex((job: { id: string; }) => job.id == this.id);

      if (index > -1) {
        this.job = this.jobs[index];
        this.job.rating = +this.job.rating;
      }
    });
  }

  submitReview() {
    if (!this.newReview.author.trim() || !this.newReview.review.trim()) {
      alert('Please fill in all fields in the review form.');
      return;
    }

    if (!this.job.reviews) {
      this.job.reviews = [];
    }

    const newReview = {
      author: this.newReview.author,
      rating: this.newReview.rating || 0,
      review: this.newReview.review,
      published_on: new Date(),
    };

    this.job.reviews.unshift(newReview);

    const totalRating = (this.job.reviews as { rating: number }[]).reduce((sum, review) => sum + review.rating, 0);
    this.job.rating = totalRating / this.job.reviews.length;

    this.job = { ...this.job };

    this.newReview = {
      author: '',
      rating: 0,
      review: '',
    };

    this.submittedReview = newReview;
  }

  openApplicationForm() {
    this.showApplicationForm = true;
  }

  closeApplicationForm() {
    this.showApplicationForm = false;
  }

  submitApplication() {
    if (
      !this.applicantName.trim() ||
      !this.applicantSurname.trim() ||
      !this.applicantGender ||
      this.applicantAge === 0 ||
      !this.applicantDescription.trim()
    ) {
      alert('Please fill in all fields in the application form.');
      return;
    }
    if (this.applicantAge > 64) {
      alert('You must be under 64 to apply.');
      return;
    }

    if (this.applicantAge < 18) {
      alert('You must be over 18 to apply.');
      return;
    }

    const applicantInfo = {
      name: this.applicantName,
      surname: this.applicantSurname,
      gender: this.applicantGender,
      age: this.applicantAge,
      description: this.applicantDescription,
    };

    this.jobApplicationService.applyForJob(this.job, applicantInfo);
    this.applicationSuccess = true;
    this.showApplicationForm = false;
    this.resetApplicationForm();
  }
  closeApplicationSuccess() {
    
    this.applicationSuccess = false;
  }



  resetApplicationForm() {
    this.applicantName = '';
    this.applicantSurname = '';
    this.applicantGender = 'male';
    this.applicantAge = 0;
    this.applicantDescription = '';
  }
}
