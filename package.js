Package.describe({
  summary: "Simple package for counters",
  version: "1.0.0",
  git: "https://github.com/Goluis/meteor-counts"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('mongo');

  api.addFiles('counts.js');
  api.addFiles('count.js', 'server');
  api.addFiles('server.js', 'server');
  api.addFiles('client.js', 'client');

  api.export('Counts');
});