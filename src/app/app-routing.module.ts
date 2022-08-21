import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ExperimentMainComponent } from './experiment-main/experiment-main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExperimentToolsComponent } from './experiment-tools/experiment-tools.component';
import { ExperimentStepsComponent } from './experiment-steps/experiment-steps.component';
import { PneumaticsPartsComponent } from './pneumatics-parts/pneumatics-parts.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: 'toolbox', component: ExperimentToolsComponent},
  { path: 'introduction/pneumatics-parts', component: PneumaticsPartsComponent},
  { path: ':contentType', component: ContentListComponent },
  { path: ':contentType/parts', redirectTo: '404' },
  { path: ':contentType/:experimentName', component: ExperimentMainComponent },
  { path: ':contentType/:experimentName/tools', component: ExperimentToolsComponent },
  { path: ':contentType/:experimentName/steps', component: ExperimentStepsComponent },
  
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
