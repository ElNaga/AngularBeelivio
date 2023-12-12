import { Component } from '@angular/core';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private navigationService: NavigationService) { }

  goToPage(page: string): void {
    this.navigationService.navigateTo(page);
  }

}
