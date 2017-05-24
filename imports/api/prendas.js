import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Prendas = new Mongo.Collection('prendas', { idGeneration: 'MONGO' });

Prendas.schema = new SimpleSchema({
    nombre: { type: String },
    descripcion: { type: String },
    imagen: { type: String },
    usuario: { type: String },
    etiquetas: { type: [String] },
    tipo: { type: [String] }
});

// Se encarga de realizar todas las verificaciones usando el esquema definido previamente
//Prendas.attachSchema(Historias.schema);


if (Meteor.isServer) {
    Meteor.publish('prendas', function prendasPublication() {
        return prendas.find({ usuario: this.userId }, {
            fields: {
                nombre: 1,
                descripcion: 1,
                imagen: 1,
                usuario: 1,
                etiquetas: 1
            }
        });
    });
}


Meteor.methods({
    'prendas.insert'(prenda) {
        // Verificacion de logeo y rol
        if (!Meteor.user()) {
            throw new Meteor.Error('not-authorized');
        }
        return Prendas.insert(prenda);
    },
});