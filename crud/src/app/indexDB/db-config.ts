import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
    name: 'index-db-marathons',
    version: 1,
    objectStoresMeta: [{
        store: 'marathons',
        storeConfig: { keyPath: 'Marathons', autoIncrement: true },
        storeSchema: [
            { name: 'marathon', keypath: 'Marathons', options: { unique: false } },
        ]
    }]
};