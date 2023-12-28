import { NgxIndexedDBService } from "ngx-indexed-db";
import { Marathon } from "../models/marathon.interface";
import { take } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class IndexDbService {
    constructor(
        private dbService: NgxIndexedDBService
    ) { }

    public AddOrUpdateMarathon(storeName: string, marathonData: Marathon) {
        this.dbService.update(storeName, marathonData).pipe(take(1)).subscribe((item) => {
            console.log('Item updated/created: ', item);
        });
    }

    public DeleteMarathon(storeName: string, idKey: number) {
        this.dbService.delete(storeName, idKey).pipe(take(1)).subscribe(() => {
            console.log('Item deleted')
        });
    }
}