import { NgxIndexedDBService } from "ngx-indexed-db";
import { Marathon } from "../models/marathon.interface";
import { Observable, firstValueFrom, take } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class IndexDbService {
    constructor(
        private dbService: NgxIndexedDBService
    ) { }

    public AddOrUpdateMarathon(storeName: string, marathonData: Marathon): Observable<any> {
        return this.dbService.update(storeName, { marathon: marathonData })
    };

    public async getMarathons(storeName: string): Promise<any> {
        return await firstValueFrom(this.dbService.getAll(storeName))
    };

    public DeleteMarathon(storeName: string, idKey: number) {
        this.dbService.delete(storeName, idKey).pipe(take(1)).subscribe(() => {
            console.log('Item deleted')
        });
    }
}