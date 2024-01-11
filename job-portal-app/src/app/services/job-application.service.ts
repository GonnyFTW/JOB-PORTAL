// job-application.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JobApplicationService {
  private appliedJobs: any[] = [];

  getAppliedJobs() {
    return this.appliedJobs;
  }

  applyForJob(job: any, applicantInfo: any) {
    const appliedJob = {
      job: { ...job },
      applicant: { ...applicantInfo },
      applicationDate: new Date(),
    };

    this.appliedJobs.push(appliedJob);
    console.log('Applied Jobs:', this.appliedJobs);
  }
}
