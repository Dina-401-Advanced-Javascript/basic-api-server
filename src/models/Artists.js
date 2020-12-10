'use strict'
//////////////////////////////////////////////////////
//  NONE OF THE ARRAY METHODS LIKE FIND, filter OR FIND INDEX WORK!!!
//   so i had to implement my own search :(
//////////////////////////////////////////////////////
const binarySearch = require('../algorithms/binary-search');

class Artists {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (!id) {
            return this.db;
        } else {
            var index = binarySearch(this.db,id);
            return this.db[index];
        }
    }

    create(artist) {
        artist.id = ++this.id;
        this.db.push(artist);
        return artist;
    }

    update(id, artist) {
        if (!id) {
            return null;
        } else {
            //////////////////////////////////////////////////////
            //  NONE OF THE ARRAY METHODS LIKE FIND OR FIND INDEX WORK!!!
            //   so i had to implement my own search :(
            //////////////////////////////////////////////////////
            var index = binarySearch(this.db,id);
            //artist.id = id;
            if (index >= 0) {
                this.db[index] = artist;
                return this.db[index];
            }
            else {
                //this item is no longer in the db. Maybe someone else deleted it.
                return null;
            }
        }
    }


    delete(id) {
        if (!id) {
            this.db = [];
            return this.db;
        } else {
            var index = binarySearch(this.db,id);
            if (index >= 0) {
                this.db.splice(index,1); 
                return this.db;
            }
            else {
                //this item is no longer in the db. Maybe someone else deleted it.
                return null;
            }
            //TODO: do this a smarter way, in place, with splice. 
            //we are making an assumption here that the provided artist id is in the list. If it isn't, nothing fails and that's okay, maybe someone else deleted it first.
//            this.db = this.db.filter((artist) => artist.id !== id);
//            return this.db;
        }
    }

    
}

module.exports = Artists;