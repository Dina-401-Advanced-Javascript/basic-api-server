'use strict';

class Artworks{
    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id){
        if (!id) {
            return this.db;
        } else {
            return this.db.find(artwork => artwork.id === id);
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
        } else{
            this.db.find(artwork => artwork.id === id) = artwork;
            return artwork;
        }
    }

    delete(id) {
        if (!id) {
            return null;
        } else {
            //TODO: do this a smarter way, in place, with splice. 
            this.db = this.db.filter((artwork) => artwork.id !== id);

            return this.db;
        }

    }
}

module.exports = Artworks;