import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Garments = new Mongo.Collection('garments', { idGeneration: 'MONGO' });

Garments.schema = new SimpleSchema({
    name: { type: String },
    image: { type: String },
    user: { type: String },
    type: { type: String },
    tag: { type: [String] },

});

// Se encarga de realizar todas las verificaciones usando el esquema definido previamente
//Prendas.attachSchema(Historias.schema);


if (Meteor.isServer) {
    Meteor.publish('garments', function prendasPublication() {
        return prendas.find({ user: this.userId }, {
            fields: {
                name: 1,
                image: 1,
                user: 1,
                tag: 1,
                type: 1
            }
        });
    });
}


Meteor.methods({
    'garments.insert'(garment) {
        // Verificacion de logeo y rol
        if (!Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }
        return Garments.insert(garment);
    },
});
