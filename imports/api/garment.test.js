import { Meteor } from 'meteor/meteor';
import { Garments } from './garment.js';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

if (Meteor.isServer) {
    describe('Garments', function () {
        let garmentId;
        let userId;

        var garmentToInsert = {
            name: "test",
            image: "test",
            type: "test",
            tag: "test"
        };

        var testUser = {
            username: 'usertest',
            email: 'user@user.com',
            password: 'usertest',
            profile: {
                retailer: "none"
            }
        }

        describe('insert', function () {
            beforeEach(function () {

                resetDatabase(null);
                userId = Accounts.createUser(testUser);


            });
            it('An unlogged user cannot insert a new garment', function () {
                const insertGarment = Meteor.server.method_handlers['garments.insert'];
                const invocation = { userId };
                try {
                    insertGarment.apply({ userId }, [garmentToInsert]);
                    assert.fail(Garments.find().count(), 1, "An error should be thrown");
                }
                catch (e) {
                    assert.equal(e.error, 'not-authorized', "Unauthorized error");
                }
            });

            it('A logged user should be able to add a new garment', function () {
                Meteor.user = function () {
                    const users = Meteor.users.find({ _id: userId }).fetch();
                    if (!users || users.length > 1)
                        throw new Error("Meteor.user() cannot find the user.");
                    return users[0];
                };
                const insertGarment = Meteor.server.method_handlers['garments.insert'];
                const invocation = { userId };
                insertGarment.apply(userId, [garmentToInsert]);
                assert.equal(Garments.find().count(), 1, "The new garment should be added");
            });
        });

        describe('remove', function () {
            beforeEach(function () {
                resetDatabase(null);
                garmentId = Garments.insert(garmentToInsert);
                userId = Accounts.createUser(testUser);
            });

            it('A logged user should be able to remove one of his garments', function () {
                Meteor.user = function () {
                    const users = Meteor.users.find({ _id: userId }).fetch();
                    if (!users || users.length > 1)
                        throw new Error("Meteor.user() cannot find the user.");
                    return users[0];
                };
                const removeGarment = Meteor.server.method_handlers['garments.remove'];
                const invocation = { userId };
                removeGarment.apply(userId, [garmentId]);
                assert.equal(Garments.find().count(), 0, "the garment should have have removed");
            });
        });
    });
}