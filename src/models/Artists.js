'use strict'

class Artists {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (!id) {
            return this.db;
        } else {
            return this.db.find((artist) => artist.id === id);
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
            this.db.find((artist) => artist.id === id) = artist;
            return artist;
        }
    }
    
    delete(id){
        if (!id) {
            return null;
        } else {
            //TODO: do this a smarter way, in place, with splice. 
            this.db = this.db.filter((artist) => artist.id !== id);
            return this.db;
        }
    }
}