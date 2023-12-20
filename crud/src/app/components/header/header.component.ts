import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../navigation.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) { }

  get currentRoute() {
    return this.router.url
  }

  goToPage(page: string): void {
    this.navigationService.navigateTo(page);
  }

  openMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
    console.log('Menu trigger called functions')
  }
  isActive(route: string): boolean {
    // console.log('route is: ' + route + '  isACtive? ' + (this.currentRoute === route))
    return this.currentRoute === route;
  }

  ngOnInit() {
    // isActive(route);
  }

}
