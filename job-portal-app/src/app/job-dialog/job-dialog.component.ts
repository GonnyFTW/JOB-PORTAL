// job-dialog.component.ts

import { Component, ElementRef, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FeatureModule } from '../feature/feature.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-dialog',
  standalone: true,
  imports: [FeatureModule, CommonModule],
  templateUrl: './job-dialog.component.html',
  styleUrls: ['./job-dialog.component.scss'],
})
export class JobDialogComponent {
  @ViewChild('jobThumbnailContainer') jobThumbnailContainer!: ElementRef;

  allJobs: any[];

  constructor(
    public dialogRef: MatDialogRef<JobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {
    this.allJobs = data.allJobs;
  }

  goToJob(type: string, id: string) {
    this.router.navigate(['jobs', type, id]);
    this.dialogRef.close();
  }
  

  scrollDown() {
    if (this.jobThumbnailContainer) {
      this.jobThumbnailContainer.nativeElement.scrollTop += 100; // Adjust the value as needed
    }
  }
}
