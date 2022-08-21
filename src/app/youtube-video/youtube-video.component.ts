import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IVideo } from '../content-list.service';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {

  @Input() videoData!: IVideo;

  safeURL?: object;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    document.getElementById("iframe")?.addEventListener("touchstart", (e) => {
      e.stopPropagation();
    }, {passive: true});
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoData.youtubeId}`);   
  }

}
