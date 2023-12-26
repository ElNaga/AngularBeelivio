import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig = {
    name: 'index-db-marathons',
    version: 1,
    objectStoresMeta: [{
        store: 'users',
        storeConfig: { keyPath: 'UserName', autoIncrement: true },
        storeSchema: [
            { name: 'UserName', keypath: 'UserName', options: { unique: false } },
        ]
    }]
};