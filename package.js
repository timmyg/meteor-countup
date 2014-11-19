Package.describe({
  name: 'timmyg13:countup',
  summary: 'countUp.js packaged for meteor',
  version: '1.0.1',
  git: 'https://github.com/timmyg/meteor-countup'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('timmyg13:countup.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('timmyg13:countup');
  api.addFiles('timmyg13:countup-tests.js');
});
