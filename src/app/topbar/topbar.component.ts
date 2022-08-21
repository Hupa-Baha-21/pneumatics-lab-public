import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentListService, IPageKinds, IDroppableContent } from '../content-list.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
  
})

export class TopbarComponent implements OnInit {


  content?: IPageKinds[] = this.data.contentList;
  sideMenuOpen: boolean = false;
  droppableContent: IDroppableContent = {};

  constructor(
    public data: ContentListService,
    public router: Router
    ) { }

  ngOnInit(): void {    
  }

  closeSideMenu(): void {
    this.sideMenuOpen = false;
    Object.keys(this.droppableContent).forEach(key => {
      this.droppableContent[key] = false;
    });
  }

  sideMenu(): void {
    this.sideMenuOpen = !this.sideMenuOpen
    if (!this.sideMenuOpen) {
      this.closeSideMenu();
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.closeSideMenu();
  }

}
