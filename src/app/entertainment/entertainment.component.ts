import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  cinemas: string[];

  constructor() { }

  ngOnInit() {
    this.cinemas = ['Greater Union', 'Garden City', 'Reading Cinema'];
  }

}
