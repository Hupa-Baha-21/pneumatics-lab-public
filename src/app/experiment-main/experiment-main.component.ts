import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentListService, IContent, IExperimentDescription } from '../content-list.service';

@Component({
  selector: 'app-experiment-main',
  templateUrl: './experiment-main.component.html',
  styleUrls: ['./experiment-main.component.scss']
})
export class ExperimentMainComponent implements OnInit {

  experiment!: IContent;
  experimentDescriptionData!: IExperimentDescription;

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
          this.experimentDescriptionData = experiment.experimentInfo!.description;
        } else {
          this.router.navigateByUrl('404');
        }
      } else {
        this.router.navigateByUrl('404');
      }
    });
  }
}
