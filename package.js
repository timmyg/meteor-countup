Package.describe({
  name: 'timmyg13:countup',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
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
