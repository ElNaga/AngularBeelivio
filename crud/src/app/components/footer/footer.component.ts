import { Component } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private navigationService: NavigationService) { }

  goToPage(page: string): void {
    this.navigationService.navigateTo(page);
  }
}
