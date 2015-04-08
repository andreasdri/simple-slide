Package.describe({
  name: 'andybb:simple-slide',
  version: '0.0.1',
  summary: 'Make simple presentations Meteor style. Markdown and code highlighting support.',
  git: 'https://www.github.com/andybb/simple-slide',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating', 'markdown', 'session', 'underscore'], 'client');
  api.use('gwendall:body-events', 'client');
  api.use('simple:highlight.js', 'client');
  api.export('SimpleSlide', 'client');
  api.addFiles(['simple-slide.html', 'simple-slide.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('andybb:simple-slide');
  api.addFiles('simple-slide-tests.js');
});
