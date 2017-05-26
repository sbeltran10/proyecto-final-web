import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Garments = new Mongo.Collection('garments', { idGeneration: 'MONGO' });


Garments.schema = new SimpleSchema({
    name: { type: String },
    image: { type: String },
    user: { type: String },
    type: { type: String },
    tag: { type: [String] },
    retailer: { type: String }

});


// Se encarga de realizar todas las verificaciones usando el esquema definido previamente
//Prendas.attachSchema(Historias.schema);


if (Meteor.isServer) {
    Meteor.publish('garments', function garmentsPublication() {
        return Garments.find(
            { $or: [{ user: this.userId }, { $and: [{retailer: { $ne: 'none' }}, {retailer: { $ne: null }}]}] }, {
            fields: {
                name: 1,
                image: 1,
                user: 1,
                tag: 1,
                type: 1,
                retailer: 1
            }
        });
    });
    Meteor.methods({
        'garments.insert'(garment) {
            // Verificacion de logeo y rol
            if (!Meteor.user()) {
                throw new Meteor.Error('not-authorized');
            }
            console.log(new Date().getTime());
            try {
                garment.user = Meteor.userId();
                if (Meteor.user().profile.retailer)
                    garment.retailer = Meteor.user().profile.retailer;
                Garments.insert(garment);
            }
            catch (err) {
                console.log(err);
                throw new Meteor.Error(err);
            }
        },
        'garments.remove'(garmentId) {

            if (!Meteor.user()) {
                throw new Meteor.Error('not-authorized');
            }
            if (!garmentId || Object.keys(garmentId).length === 0) {
                throw new Meteor.Error('invalid-id', "Invalid id");
            }
            return Garments.remove(garmentId);
        },
    });
}



