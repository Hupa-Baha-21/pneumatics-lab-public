import { Component, Input, OnInit } from '@angular/core';
import { ITools } from '../content-list.service';

@Component({
  selector: 'app-experiment-tool',
  templateUrl: './experiment-tool.component.html',
  styleUrls: ['./experiment-tool.component.scss']
})
export class ExperimentToolComponent implements OnInit {

  @Input() tool!: ITools;

  constructor() { }

  ngOnInit(): void {
  }

}
