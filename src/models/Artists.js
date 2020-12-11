'use strict';

const mongoose = require('mongoose');

// 1. make a schema
const artistSchema = mongoose.Schema({
  name: { type: String, required: true },
  fromLocation: { type: String, required: true },
  yearOfBirth: {type: Number, required: true},
  yearOfDeath: {type: Number, required: false}});

// 2. export this schema as a model
const artistModel = mongoose.model('artist', artistSchema);

module.exports = artistModel;

/*
/////////////////////////////////////////
// ORIGINAL CODE THAT WASN'T WORKING DUE TO "parseInt" missing!! 
/////////////////////////////////////////
class Artists {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (!id) {
            return this.db;
        } else {
            console.log(id);
            return this.db.find(artist => artist.id === parseInt(id));
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
            let indexOfThisArtist = this.db.findIndex(artist => artist.id === parseInt(id));
            if (indexOfThisArtist) {
                this.db[indexOfThisArtist] = artist;
                return this.db[indexOfThisArtist];
            }
            else {
                //we couldn't find the artist you're referring to in our db.
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
            //we are making an assumption here that the provided artist id is in the list. If it isn't, nothing fails and that's okay, maybe someone else deleted it first.
            this.db = this.db.filter((artist) => artist.id !== parseInt(id));
            return this.db;
        }
    }
}
*/
//////////////////////////////////////////////////////
//  NONE OF THE ARRAY METHODS LIKE FIND OR FIND INDEX WERE WORKNG!!!
//   so i implemented my own binary search! 
//////////////////////////////////////////////////////
/*
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

module.exports = Artists;*/
