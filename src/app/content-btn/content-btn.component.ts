import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-btn',
  templateUrl: './content-btn.component.html',
  styleUrls: ['./content-btn.component.scss']
})
export class ContentBtnComponent implements OnInit {

  @Input() itemName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
