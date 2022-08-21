import { Component, OnInit } from '@angular/core';
import { IVideo } from '../content-list.service';

@Component({
  selector: 'app-pneumatics-parts',
  templateUrl: './pneumatics-parts.component.html',
  styleUrls: ['./pneumatics-parts.component.scss']
})
export class PneumaticsPartsComponent implements OnInit {

  video: IVideo = {
    youtubeId: "W6IpVh_M0w0"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
