import config from "../configs/dbConfig";

export default function IDBDatabaseInstance(){
    if( typeof window.IDBDatabaseInstance_ !== 'undefined' )
      return Promise.resolve(window.IDBDatabaseInstance_);

      window.IDBDatabaseInstance_ = new IDBDatabase();

      return Promise.resolve(window.IDBDatabaseInstance_);
}
class IDBDatabase{
    constructor(){
        this.db_ = null;
        this.config = config;
        this.name = config.name;
        this.stores_ = config.stores;
        this.indexedDB =    window.indexedDB ||
                            window.mozIndexedDB ||
                            window.webkitIndexedDB ||
                            window.msIndexedDB ||
                            window.shimIndexedDB;

        if(!window.indexedDB) {
            throw "Your browser doesn't support a stable version of IndexedDB.";
        }
    }

    getStore(storeName){
        if (!this.stores_[storeName])
        throw 'There is no store with name "' + storeName + '"';

        return this.stores_[storeName];
    }
    open(){
        if(this.db_)
        return Promise.resolve(this.db_);

        return new Promise((resolve, reject)=>{
            //create the database
           const dbOpen = this.indexedDB.open(this.name, this.version);

           dbOpen.onupgradeneeded = (e)=>{
                this.db_ = e.target.result;
                var storeNames = Object.keys(this.stores_);
                var storeName;

                //create the stores..
                for(let s =0;s < storeNames.length; s++ ){
                    storeName = storeNames[s];

                    //if store exist then do something
                    if (this.db_.objectStoreNames.contains(storeName)) {

                        //if deleteOnupgrade is true then delete the object store..
                        if (this.stores_[storeName].deleteOnUpgrade)
                            this.db_.deleteObjectStore(storeName);
                        else
                        continue;
                    }
                    //if store does not exist then create the store..
                    if (!this.db_.objectStoreNames.contains(storeName))
                    var dbStore = this.db_.createObjectStore(storeName, this.stores_[storeName].properties);

                    //if store indexes isnt undefined then create
                    //store indexes base on te configuration..
                    if (typeof this.stores_[storeName].indexes !== 'undefined') {
                        var indexes = this.stores_[storeName].indexes;
                        var indexNames = Object.keys(indexes);
                        var index;

                        for(let i =0; i < indexNames.length; i++){
                            index = indexNames[i];
                            dbStore.createIndex(index, index, indexes[index]);
                        }

                   }

                }
           }

            dbOpen.onsuccess = (e) => {
                this.db_ = e.target.result;
                resolve(this.db_);
            }

            dbOpen.onerror = (e) => {
                reject(e);
            };
        })
    }
    get(storeName, key){
        return this.open().then((db) => {

            return new Promise((resolve, reject) => {

              var dbTransaction = db.transaction(storeName, 'readonly');
              var dbStore = dbTransaction.objectStore(storeName);
              var dbStoreRequest = dbStore.get(key);

              dbTransaction.oncomplete = (e) => {
                resolve(dbStoreRequest.result);
              }

              dbTransaction.onerror = (e) => {
                reject(e);
              }

            });

          });
    }
    getAll (storeName, index, order) {

        return this.open().then((db) => {

          return new Promise((resolve, reject) => {

            var dbTransaction = db.transaction(storeName, 'readonly');
            var dbStore = dbTransaction.objectStore(storeName);
            var dbCursor;

            if (typeof order !== 'string')
              order = 'next';

            if (typeof index === 'string')
              dbCursor = dbStore.index(index).openCursor(null, order);
            else
              dbCursor = dbStore.openCursor();

            var dbResults = [];

            dbCursor.onsuccess = (e) => {
              var cursor = e.target.result;
              if (cursor) {
                dbResults.push({
                  key: cursor.key,
                  value: cursor.value
                });
                cursor.continue();
              } else {
                resolve(dbResults);
              }
            }

            dbCursor.onerror = (e) => {
              reject(e);
            }

          });

        });
      }
    add(storeName, obj) {

        return this.open().then((db) => {

          return new Promise((resolve, reject) => {

            var dbTransaction = db.transaction(storeName, 'readwrite');
            var dbStore = dbTransaction.objectStore(storeName);
            var dbRequest = dbStore.put( obj );

            dbTransaction.oncomplete = (e) => {
              resolve(dbRequest.result);
            }

            dbTransaction.onerror = (e) => {
              reject(e);
            }

          });

        });

    }

    close(){
        return new Promise((resolve, reject) => {

            if (!this.db_)
              reject('No database connection');

            this.db_.close();
            resolve(this.db_);

        });
    }
    delete(storeName, key){
        return this.open().then((db) => {

            return new Promise((resolve, reject) => {

              var dbTransaction = db.transaction(storeName, 'readwrite');
              var dbStore = dbTransaction.objectStore(storeName);
              dbStore.delete(key);

              dbTransaction.oncomplete = (e) => {
                resolve(e);
              }

              dbTransaction.onerror = (e) => {
                reject(e);
              }


            });
          });
    }
    deleteAll(storeName){
        return this.open().then((db) => {

            return new Promise((resolve, reject) => {

              var dbTransaction = db.transaction(storeName, 'readwrite');
              var dbStore = dbTransaction.objectStore(storeName);
              var dbRequest = dbStore.clear();

              dbRequest.onsuccess = (e) => {
                resolve(e);
              }

              dbRequest.onerror = (e) => {
                reject(e);
              }

            });

          });
    }
}