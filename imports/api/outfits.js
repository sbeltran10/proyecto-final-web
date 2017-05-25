import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Outfits = new Mongo.Collection('outfits', { idGeneration: 'MONGO' });

Outfits.schema = new SimpleSchema({
    name: { type: String },
    user: { type: String },
    shared: { type: Boolean },
    description: { type: String },
    garments: { type: [Object] }
});

// Se encarga de realizar todas las verificaciones usando el esquema definido previamente
//Outfits.attachSchema(Outfits.schema);


if (Meteor.isServer) {
    Meteor.publish('outfits', function outfitsPublication() {
        return Outfits.find({}, {
            fields: {
                nombre: 1,
                usuario: 1,
                compartida: 1,
                descripcion: 1,
                prendas: 1
            }
        });
    });
}


Meteor.methods({
    'outfits.insert'(pinta) {
        // Verificacion de logeo y rol
        if (!Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }
        return Outfits.insert(pinta);
    },
});