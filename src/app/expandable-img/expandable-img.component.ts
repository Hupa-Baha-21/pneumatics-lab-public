import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable-img',
  templateUrl: './expandable-img.component.html',
  styleUrls: ['./expandable-img.component.scss']
})
export class ExpandableImgComponent implements OnInit {

  @Input() experiment!: string;
  @Input() imgFolder!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
