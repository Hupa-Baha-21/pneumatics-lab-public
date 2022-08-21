import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackBtnComponent } from './back-btn/back-btn.component';
import { ContentBtnComponent } from './content-btn/content-btn.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ExpandableImgComponent } from './expandable-img/expandable-img.component';
import { ExperimentMainComponent } from './experiment-main/experiment-main.component';
import { ExperimentStepsComponent } from './experiment-steps/experiment-steps.component';
import { ExperimentToolsComponent } from './experiment-tools/experiment-tools.component';
import { ExperimentToolComponent } from './experiment-tool/experiment-tool.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PneumaticsPartsComponent } from './pneumatics-parts/pneumatics-parts.component';
import { TopbarComponent } from './topbar/topbar.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { FilterToolsPipe } from './filter-tools.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BackBtnComponent,
    ContentBtnComponent,
    ContentListComponent,
    ExpandableImgComponent,
    ExperimentMainComponent,
    ExperimentStepsComponent,
    ExperimentToolsComponent,
    ExperimentToolComponent,
    HomePageComponent,
    PageNotFoundComponent,
    PneumaticsPartsComponent,
    TopbarComponent,
    YoutubeVideoComponent,
    FilterToolsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
