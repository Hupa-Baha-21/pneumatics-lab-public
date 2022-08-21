import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentListService, IContent } from '../content-list.service';


@Component({
  selector: 'app-experiment-tools',
  templateUrl: './experiment-tools.component.html',
  styleUrls: ['./experiment-tools.component.scss']
})
export class ExperimentToolsComponent implements OnInit {

  experiment!: IContent;
  pageType!: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    public data: ContentListService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if (this.router.url === '/toolbox') {
        this.pageType = 'toolbox';
      } else {
      let pageTitle = String(routeParams['contentType']);
      let contentType = this.data.contentList.find(page => page.title === pageTitle);
      if (contentType) {
        let experimentName = String(routeParams['experimentName']);
        let experiment = contentType.content.find(experiment => experiment.title === experimentName);
        if (experiment) {
          this.experiment = experiment;
          this.pageType = 'experiment';
        } else {
          this.router.navigateByUrl('404');
        }
      } else {
        this.router.navigateByUrl('404');
      }}
    });
  }

}
