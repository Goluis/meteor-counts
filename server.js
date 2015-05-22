counts.prototype.create = function (cursor, name, interval) {
	return new count(interval, function (add) {
		add(name, cursor.count());
	});
};

counts.prototype.countArray = function (cursor, field, interval) {
	return new count(interval, function (add) {
		cursor.forEach(function (doc) {
			add(doc._id, doc[field].length);
		});
	});
};