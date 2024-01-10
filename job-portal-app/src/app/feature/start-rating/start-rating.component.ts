import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: false,

  templateUrl: './start-rating.component.html',
  styleUrl: './start-rating.component.scss'
})
export class StarRatingComponent implements OnInit {

  @Input() rating: any;
  @Input() isReadOnly: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  ariaValueText(current: number, max: number) {
    return `${current} out of ${max} hearts`;
  }
}
