import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import { SharedService } from 'src/app/modules/shared-module/shared.service';
import { Marathon, Race } from 'src/app/models/marathon.interface';
import { EditCreateMarathonComponent } from '../edit-create-marathon/edit-create-marathon.component';
import { MatDialog } from '@angular/material/dialog';
import { RacesEnum } from 'src/app/enums/marthon-enums.enum';

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

  dialogMarathonData: Marathon = [] as unknown as Marathon;
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

  public AddMarathon(inputMarathons: Marathon[]): void {
    console.log('printing from inside AddMarathon +++ BEFORE PUSH:\n', inputMarathons)
    const newMarathon = {
      id: inputMarathons.length + 1,
      name: '',
      location: '',
      distance: RacesEnum.Trka5km,
      races: [{
        distance: 0,
        date: new Date()
      }],
      description: '',
      date: new Date()
    }

    let index = inputMarathons.push(newMarathon);
    console.log(index, 'ths is from index console lof')

    console.log('printing from inside AddMarathon:\n', inputMarathons)
    this.openModal(this.sharedService.marathons.marathons[index - 1]);
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
    this.dialogMarathonData = marathonData;
    const dialogRef = this.dialog.open(EditCreateMarathonComponent, {
      data: { marathon: marathonData },
      panelClass: 'admin-modal',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.CheckMarathonRacesIfAnyAreEmpty();

    });
  }

  public CheckMarathonRacesIfAnyAreEmpty(): void {
    console.log('this is are the Marathons from the checking Function\n', this.dialogMarathonData)
    this.dialogMarathonData.races = this.dialogMarathonData.races.filter(race => race.date && race.distance);
  }
}
