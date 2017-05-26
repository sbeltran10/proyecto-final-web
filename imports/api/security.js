import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

// Limite method calls
const LISTS_METHODS = _.pluck([
    insert,
    remove,

], 'name');
// Only 3 calls per second
if (Meteor.isServer) {
    DDPRateLimiter.addRule({
        name(name) {
            return _.contains(LISTS_METHODS, name);
        },
        // Rate limit per connection ID
        connectionId() { return true; }
    }, 5, 1000);
}

// Deny the users modification of some fields
Meteor.users.deny({
  update() { return true; }
});