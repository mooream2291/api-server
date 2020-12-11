'use strict';

const model = require('./place');

class Collection {

    //this allows us to pass in any sort of schema into this collection and do CRUD methods based on this schema
    constructor(schema){
        this.model = schema;
    }

get(_id) {
    if(_id){
        return this.model.findOne({_id});
    } else {
        return this.model.find({})
    }
}

create(record) {
    let newRecord = new this.model(record);
    console.log(newRecord);
    return newRecord.save();
}
}
module.exports = Collection;