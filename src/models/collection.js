'use strict';

//this would only work if our chemas are using the same mongoose shell
// const require = ('./place');
//here I brought in my model/schema from my place.js model
//what happens when I make a new instance of this food collection?--it goes through the constructor
//at this point what happens to the model?--we get a new schema
class PlaceCollection {

    //this allows us to pass in any sort of schema into this collection and do CRUD methods based on this schema
    constructor(schema) {
        this.model = schema;
    }

    get(_id) {
            return _id ? this.model.findOne({ _id }) : this.model.find({});
        }

    create(record) {
        //try to make this a one liner
        let newRecord = new this.model(record);
        return newRecord.save();
    }

    update(_id, record) {
        console.log(_id, record);
        try {
            return this.model.findByIdAndUpdate(_id, record, { new: true });
        }
         catch(e) {
             console.log(e);
         }
    }

    delete(_id) {
        return this.model.findByIdAndDelete(_id);
    }
}
module.exports = PlaceCollection;