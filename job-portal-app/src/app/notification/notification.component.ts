
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { JobApplicationService } from '../services/job-application.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'] 
})
export class NotificationComponent implements OnInit {
  appliedJobs: any[] = [];

  constructor(private jobApplicationService: JobApplicationService) { }

  ngOnInit(): void {
    console.log('Getting applied jobs...');
    this.appliedJobs = this.jobApplicationService.getAppliedJobs();
    console.log('Applied Jobs:', this.appliedJobs);
  }
    toggleDetails(appliedJob: any): void {
      appliedJob.showDetails = !appliedJob.showDetails;
    }
  }
  

