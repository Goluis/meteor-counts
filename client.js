counts.prototype.collection = new Mongo.Collection('counts');

counts.prototype.get = function (name) {
	var count = this.collection.findOne(name);
	return count && count.count;
};

counts.prototype.find = function () {
	var counts = {};
	this.collection.find().forEach(function (doc) {
		counts[doc._id] = doc.count;
	});
	return counts;
};