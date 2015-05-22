# meteor-counts
very simple package to count with polling

## Quick Start
```js
// server
Meteor.publish('users', function () {
  var cursor = Meteor.users.find();
  Counts.create(cursor, 'users', 5000).publish(this);
  
  return cursor;
});

// client
Meteor.subscribe('users');

Template.myTemplate.helpers({
  count: function () {
    return Counts.get('users');
  }
});
```

## Server

### Counts.create (cursor, name, interval)
 * **cursor**: Meteor [find()](http://docs.meteor.com/#/full/find) cursor
 * **name**: name that will have the count on the client
 * **interval**: time in milliseconds to check the counter (default 10 seconds)

### Counts.countArray (cursor, field, interval)
publishes the length of an array, unlike `Counts.create` the counter name is the document _id. `field` is the field in the document where is the array
 
**Note:** previous methods return a count that has not yet been started, to start it use **count.publish(this)**. `this` is the `this` of the publication

## Client

### Counts.get (name)
returns a count, is a number or undefined

### Counts.find ()
returns all counts in an object where the `key` is the name and the `value` the count