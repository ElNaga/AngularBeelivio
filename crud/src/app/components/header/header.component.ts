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
  currentRoute: string = 'asd';

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    // Correctly filter the events to only get instances of NavigationEnd
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects; // Now TypeScript knows that `event` is a `NavigationEnd` event.
    });
  }

  goToPage(page: string): void {
    this.navigationService.navigateTo(page);
  }

  openMenu(menuTrigger: MatMenuTrigger) {
    menuTrigger.openMenu();
    console.log('Menu trigger called functions')
  }
  isActive(route: string): boolean {
    // You may need to adjust this based on your routing configuration.
    console.log('route is: '+route+'  isACtive? '+(this.currentRoute === route))
    return this.currentRoute === route;
  }

  ngOnInit() {
    // isActive(route);
  }

}
