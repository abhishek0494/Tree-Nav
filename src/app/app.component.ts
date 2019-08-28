import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { navItems } from './data'
import { fadeAnimation } from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {

  title = 'Tree-Nav';
  public breadcrumbList = []
  public _opened: boolean = true;
  _isDocked: boolean = true;
  mode: string = 'push';
  menu = navItems
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(public router: Router) {
    let routerUrl: string, routerList: Array<any>, target: any;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        routerUrl = event.urlAfterRedirects;
        target = this.menu;
        this.breadcrumbList.length = 0;
        routerList = routerUrl.slice(1).split('/');
        routerList.forEach((router, index) => {
          target = target.find(page => {
            return page.route.substr(page.route.lastIndexOf('/') + 1) === router
          });
          this.breadcrumbList.push({
            name: target.displayName,
            path: target.route,
            iconName: target.iconName
          });
          if (index + 1 !== routerList.length) {
            target = target.children;
          }
        });


      }

    })
  }
  ngOnInit() {
    this.router.navigateByUrl('/microsoft')
  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
