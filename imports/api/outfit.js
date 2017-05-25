import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Outfit = new Mongo.Collection('outfits', { idGeneration: 'MONGO' });

Outfit.schema = new SimpleSchema({
    name: { type: String },
    user: { type: String },
    shared: { type: Boolean },
    description: { type: String },
    garments: { type: [Object] },
    createdAt: { type: Date },
    rating: { type: Number }
});

// Se encarga de realizar todas las verificaciones usando el esquema definido previamente
//Outfits.attachSchema(Outfits.schema);


if (Meteor.isServer) {
    Meteor.publish('outfits', function outfitsPublication() {
        return Outfit.find({},{sort: {createdAt: -1}}, {
            fields: {
                name: 1,
                user: 1,
                shared: 1,
                descripcion: 1,
                garments: 1,
                createdAt: 1
            }
        });
    });
}


Meteor.methods({
    'outfits.insert'(outfit) {
        // Verificacion de logeo y rol
        if (!Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }
        outfit.user = Meteor.userId();
        return Outfit.insert(outfit);
    },
    'outfits.remove'(outfitId) {

        if (!Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }
        if (!outfitId || Object.keys(outfitId).length === 0) {
            throw new Meteor.Error('invalid-id', "Invalid id");
        }
        return Outfit.remove(outfitId);
    },
});
