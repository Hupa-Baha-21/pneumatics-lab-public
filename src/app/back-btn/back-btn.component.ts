import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})

export class BackBtnComponent implements OnInit {

  @Input() arrowColor?: string;
  @Input() previousPage!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      // console.log(routeParams['contentType']);
    });
  }

  back(): void {
    this.location.back()
  }

}
