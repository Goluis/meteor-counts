count = function (interval, getCountCallBack) {
	this.interval = interval || 10 * 1000;
	this.count = getCountCallBack;
};

count.prototype._publishCursor = function (sub) {
	var count = this.count;

	count(function (name, count) {
		sub.added('counts', name, {
			count: count
		});
	});

	var handler = Meteor.setInterval(function () {
		count(function (name, count) {
			sub.changed('counts', name, {
				count: count
			});
		});
	}, this.interval);

	sub.onStop(function () {
		Meteor.clearTimeout(handler);
	});
};

count.prototype.publish = function (sub) {
	this._publishCursor(sub);
};