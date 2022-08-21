import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentListService, IContent } from '../content-list.service';

@Component({
  selector: 'app-experiment-steps',
  templateUrl: './experiment-steps.component.html',
  styleUrls: ['./experiment-steps.component.scss']
})
export class ExperimentStepsComponent implements OnInit {

  experiment!: IContent;

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
        let experimentName = String(routeParams['experimentName']);
        let experiment = contentType.content.find(experiment => experiment.title === experimentName);
        if (experiment) {
          this.experiment = experiment;
        } else {
          this.router.navigateByUrl('404');
        }
      } else {
        this.router.navigateByUrl('404');
      }
    });
  }

}
