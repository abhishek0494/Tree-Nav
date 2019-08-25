import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { navItems } from './data'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'Tree-Nav';
  private breadcrumbList = []
  private _opened: boolean = true;
  _isDocked: boolean = true;
  mode: string = 'push';
  menu = navItems
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(private router: Router) {
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
    this.router.navigateByUrl('/google')
  }
}
