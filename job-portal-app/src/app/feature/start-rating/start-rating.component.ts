import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './start-rating.component.html',
  styleUrls: ['./start-rating.component.scss'],
  outputs: ['ratingChange: rating']
})
export class StarRatingComponent implements OnInit, OnChanges {

  @Input() rating: any;
  @Input() isReadOnly: boolean = false;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rating']) {
      console.log('Rating changed:', this.rating);
    }
  }

  ngOnInit(): void {
  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }
}
