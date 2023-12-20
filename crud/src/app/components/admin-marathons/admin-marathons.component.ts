import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import { SharedService } from 'src/app/modules/shared-module/shared.service';
import { Marathon } from 'src/app/models/marathon.interface';
import { EditCreateMarathonComponent } from '../edit-create-marathon/edit-create-marathon.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-marathons',
  templateUrl: './admin-marathons.component.html',
  styleUrls: ['./admin-marathons.component.css'],
})
export class AdminMarathonsComponent implements OnInit, OnDestroy {
  constructor(
    private titleService: Title,
    private sharedService: SharedService,
    private dialog: MatDialog
  ) { }

  marathons = this.sharedService.marathons

  searchString: string = '';
  shouldSort: boolean = false;

  color: ThemePalette = 'accent'
  public toggleOptions = {
    color: this.color,
    checked: false,
    disabled: false,
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin Panel');
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('Marathons Page');
  }

  public deleteMarathon(inputMarathon: Marathon): void {
    const index = this.sharedService.marathons.marathons.findIndex(marathon => marathon === inputMarathon);
    if (index > -1) {
      this.sharedService.marathons.marathons.splice(index, 1);
    }
    this.sharedService.initialiseMarathons();
  }

  openModal(marathonData: Marathon): void {
    console.log('logging from openModal, data:\n', marathonData)
    this.dialog.open(EditCreateMarathonComponent, {
      data: { marathon: marathonData },
      // panelClass: 'future-card-modal'
      width: "100%",
      maxWidth: "900px",
    });
  }

}
