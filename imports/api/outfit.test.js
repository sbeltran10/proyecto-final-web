import { Meteor } from 'meteor/meteor';
import { Garments } from './garment.js';
import { Outfit } from './outfit.js';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

if (Meteor.isServer) {
    describe('Outfits', function () {
        let outfitId;
        let userId;

        var outfitToInsert = {
            name: "test",
            garments: [],
            createdAt: new Date(),
        }

        var garmentToInsert1 = {
            name: "test",
            image: "test",
            type: "test",
            tag: "test"
        };

        var garmentToInsert2 = {
            name: "test",
            image: "test",
            type: "test",
            tag: "test"
        };

        var garmentToInsert3 = {
            name: "test",
            image: "test",
            type: "test",
            tag: "test"
        };

        outfitToInsert.garments.push(garmentToInsert1);
        outfitToInsert.garments.push(garmentToInsert2);
        outfitToInsert.garments.push(garmentToInsert3);


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
            it('An unlogged user cannot insert a new outfit', function () {
                const insertOutfit = Meteor.server.method_handlers['outfits.insert'];
                const invocation = { userId };
                try {
                    insertOutfit.apply({ userId }, [outfitToInsert]);
                    assert.fail(Outfit.find().count(), 1, "An error should be thrown");
                }
                catch (e) {
                    assert.equal(e.error, 'not-authorized', "Unauthorized error");
                }
            });

            it('A logged user should be able to add a new outfit', function () {
                Meteor.user = function () {
                    const users = Meteor.users.find({ _id: userId }).fetch();
                    if (!users || users.length > 1)
                        throw new Error("Meteor.user() cannot find the user.");
                    return users[0];
                };
                const insertOutfit = Meteor.server.method_handlers['outfits.insert'];
                const invocation = { userId };
                insertOutfit.apply(userId, [outfitToInsert]);
                assert.equal(Outfit.find().count(), 1, "The new outfit should be added");
            });
        });

        describe('remove', function () {
            beforeEach(function () {
                resetDatabase(null);
                outfitId = Outfit.insert(outfitToInsert);
                userId = Accounts.createUser(testUser);
            });

            it('A logged user should be able to remove one of his outfits', function () {
                Meteor.user = function () {
                    const users = Meteor.users.find({ _id: userId }).fetch();
                    if (!users || users.length > 1)
                        throw new Error("Meteor.user() cannot find the user.");
                    return users[0];
                };
                const removeOutfit = Meteor.server.method_handlers['outfits.remove'];
                const invocation = { userId };
                removeOutfit.apply(userId, [outfitId]);
                assert.equal(Outfit.find().count(), 0, "the outfit should have been removed");
            });
        });
    });
}