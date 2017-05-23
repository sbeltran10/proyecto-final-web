import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Pintas = new Mongo.Collection('pintas', { idGeneration: 'MONGO' });

Pintas.schema = new SimpleSchema({
    nombre: { type: String },
    usuario: { type: String },
    compartida: { type: Boolean },
    descripcion: { type: String },
    prendas: { type: [Object] }
});

// Se encarga de realizar todas las verificaciones usando el esquema definido previamente
//Pintas.attachSchema(Pintas.schema);


if (Meteor.isServer) {
    Meteor.publish('pintas', function pintasPublication() {
        return Pintas.find({}, {
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
    'pintas.insert'(pinta) {
        // Verificacion de logeo y rol
        if (!Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }
        return Pintas.insert(pinta);
    },
});