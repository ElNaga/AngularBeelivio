import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemePalette } from '@angular/material/core';
import { SharedService } from 'src/app/modules/shared-module/shared.service';
import { Marathon, Race } from 'src/app/models/marathon.interface';
import { EditCreateMarathonComponent } from '../edit-create-marathon/edit-create-marathon.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize, take, takeUntil } from "rxjs/operators";
import { Subject, firstValueFrom } from 'rxjs';
import { IndexDbService } from 'src/app/indexDB/index-db-service.service';

@Component({
  selector: 'app-admin-marathons',
  templateUrl: './admin-marathons.component.html',
  styleUrls: ['./admin-marathons.component.css'],
})
export class AdminMarathonsComponent implements OnInit, OnDestroy {
  private readonly unsubscribe$: Subject<void> = new Subject();

  constructor(
    private dbService: IndexDbService,
    private titleService: Title,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
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
    races: [{
      distance: 0,
      date: new Date(),
    }]
  }

  ngOnInit(): void {
    this.titleService.setTitle('Admin Panel');
  }

  ngOnDestroy(): void {
    this.titleService.setTitle('Marathons Page');
  }

  public AddMarathon(inputMarathons: Marathon[]): void {
    console.log('printing from inside AddMarathon +++ BEFORE PUSH:\n', inputMarathons)
    let index = inputMarathons.push({ ...this.emptyMarathon });
    this.openModal(inputMarathons[index - 1])
  }

  public async deleteMarathon(inputMarathon: Marathon): Promise<void> {
    const index = this.sharedService.marathons.marathons.findIndex(marathon => marathon.id === inputMarathon.id);
    if (index > -1) {
      this.sharedService.marathons.marathons.splice(index, 1);
    }

    let dbMarathons = await this.dbService.getMarathons('marathons');
    let arrOfObjectToDelete = dbMarathons.filter((x: any) => {
      console.log('x.Marathons:', x.marathon.id)
      console.log('inputMarathon.id:', inputMarathon.id)
      return x.marathon.id === inputMarathon.id;
    });
    console.log(arrOfObjectToDelete[0].Marathons)
    let indexToDelete = arrOfObjectToDelete[0].Marathons
    this.dbService.DeleteMarathon('marathons', indexToDelete);
    await this.sharedService.initialiseMarathons();
  }

  async closeModal(formsValidity: any): Promise<void> {
    console.log('LOGGING FROM CLOSE MODAL')
    this.dialog.closeAll();
    console.log('these are the forms:', formsValidity)
    if (!formsValidity) {
      this.marathons.marathons = this.marathons.marathons.filter(marathon => this.dialogMarathonData !== marathon)
      console.log('Not properly init marahton deleted');
      let snackBarRef = this._snackBar.open('Marathon Deleted! Fields not filled!', 'OK', {
        duration: 7000,
        verticalPosition: 'top'
      });
    } else if (this.dialogMarathonData.races.length === 0) {
      let snackBarRef = this._snackBar.open('WARNING! No races added in marathon!', 'OK', {
        duration: 7000,
        verticalPosition: 'top'
      });
    }
    await this.sharedService.initialiseMarathons();
  }

  openModal(marathonData: Marathon): void {
    console.log('logging from openModal, data:\n', marathonData)
    this.dialogMarathonData = marathonData;
    const dialogRef = this.dialog.open(EditCreateMarathonComponent, {
      disableClose: true,
      data: { marathon: marathonData },
      panelClass: 'admin-modal',
    });

    const sub = dialogRef.componentInstance.closeEvent
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((formsValidity: boolean) => {
        this.closeModal(formsValidity);
        console.log(sub);
      });

    console.log('closed::::', sub.closed);

    dialogRef
      .afterClosed()
      .subscribe(result => {
        console.log('The dialog was closed', result);
        this.CheckMarathonRacesIfAnyAreEmpty();
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        console.log(this.unsubscribe$);
      });
  }

  public CheckMarathonRacesIfAnyAreEmpty(): void {
    console.log('this is are the Marathons from the checking Function\n', this.dialogMarathonData)
    this.dialogMarathonData.races = this.dialogMarathonData.races.filter(race => race.date && race.distance);
  }
}
