import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from './start-rating/start-rating.component';



@NgModule({
  declarations: [StarRatingComponent],
  imports: [
    CommonModule,
    NgbRatingModule,
    NgbModule
  ],
  exports: [StarRatingComponent
  ]
})
export class FeatureModule { }
