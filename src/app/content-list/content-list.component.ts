import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentListService, IPageKinds } from '../content-list.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentType!: IPageKinds;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    public data: ContentListService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      let pageTitle = String(routeParams['contentType']);
      let contentType = this.data.contentList.find(page => page.title === pageTitle);
      if (contentType) {
        this.contentType = contentType;
      } else {
        this.router.navigateByUrl('404');
      }
    });
  }

}
