import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import { SharedService } from 'src/app/modules/shared-module/shared.service';
import { Marathon, Race } from 'src/app/models/marathon.interface';
import { EditCreateMarathonComponent } from '../edit-create-marathon/edit-create-marathon.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

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

  emptyMarathon: Marathon = {
    id: Date.now() + Math.random(),
    name: '',
    location: '',
    distance: 0,
    description: '',
    date: new Date(),
    races: [] as Race[]
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin Panel');
    console.log('ASDIAEFAEFJKEFKAEFAEF', this.dialog)
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('Marathons Page');
  }

  public AddMarathon(inputMarathons: Marathon[]): void {
    console.log('printing from inside AddMarathon +++ BEFORE PUSH:\n', inputMarathons)
    let index = inputMarathons.push(this.emptyMarathon);
    this.openModal(inputMarathons[index - 1])
  }

  public deleteMarathon(inputMarathon: Marathon): void {
    const index = this.sharedService.marathons.marathons.findIndex(marathon => marathon === inputMarathon);
    if (index > -1) {
      this.sharedService.marathons.marathons.splice(index, 1);
    }
    this.sharedService.initialiseMarathons();
  }

  closeModal(): void {
    console.log('LOGGING FROM CLOSE MODAL')
    this.dialog.closeAll();
  }

  openModal(marathonData: Marathon): void {
    console.log('logging from openModal, data:\n', marathonData)
    this.dialogMarathonData = marathonData;
    const dialogRef = this.dialog.open(EditCreateMarathonComponent, {
      disableClose: true,
      data: { marathon: marathonData },
      panelClass: 'admin-modal',
    });
    const sub = dialogRef.componentInstance.closeEvent.subscribe(() => {
      dialogRef.close()
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
