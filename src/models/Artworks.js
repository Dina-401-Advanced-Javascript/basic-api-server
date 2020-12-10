'use strict';

/////////////////////////////////////////
// ORIGINAL CODE THAT WASN'T WORKING DUE TO "parseInt" missing!! 
/////////////////////////////////////////
class Artworks {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (!id) {
            return this.db;
        } else {
            console.log(id);
            return this.db.find(artwork => artwork.id === parseInt(id));
        }
    }

    create(artwork) {
        artwork.id = ++this.id;
        this.db.push(artwork);
        return artwork;
    }

    update(id, artwork) {
        if (!id) {
            return null;
        } else {
            let indexOfThisArtwork = this.db.findIndex(artwork => artwork.id === parseInt(id));
            if (indexOfThisArtwork) {
                this.db[indexOfThisArtwork] = artwork;
                return this.db[indexOfThisArtwork];
            }
            else {
                //we couldn't find the artwork you're referring to in our db.
                return null;
            }
        }
    }

    delete(id) {
        if (!id) {
            this.db = [];
            return this.db;
        } else {
            //TODO: do this a smarter way, in place, with splice. 
            //we are making an assumption here that the provided artwork id is in the list. If it isn't, nothing fails and that's okay, maybe someone else deleted it first.
            this.db = this.db.filter((artwork) => artwork.id !== parseInt(id));
            return this.db;
        }
    }
}

//////////////////////////////////////////////////////
//  NONE OF THE ARRAY METHODS LIKE FIND OR FIND INDEX WERE WORKNG!!!
//   so i implemented my own binary search! 
//////////////////////////////////////////////////////
/*
const binarySearch = require('../algorithms/binary-search');

class Artworks {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (!id) {
            return this.db;
        } else {
            var index = binarySearch(this.db, id);
            return this.db[index];
        }
    }

    create(artwork) {
        artwork.id = ++this.id;
        this.db.push(artwork);
        return artwork;
    }

    update(id, artwork) {
        if (!id) {
            return null;
        } else {
            var index = binarySearch(this.db, id);
            //artist.id = id;
            if (index >= 0) {
                this.db[index] = artwork;
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
            var index = binarySearch(this.db, id);
            if (index >= 0) {
                this.db.splice(index, 1);
                return this.db;
            }
            else {
                //this item is no longer in the db. Maybe someone else deleted it.
                return null;
            }
        }
    }


}*/

module.exports = Artworks;