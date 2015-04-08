Package.describe({
  name: 'andybb:simple-slide',
  version: '0.1.0',
  summary: 'Make simple presentations Meteor style. Markdown and code highlighting support.',
  git: 'https://github.com/andybb/simple-slide.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.4.1');
  api.use(['templating', 'markdown', 'session', 'underscore'], 'client');
  api.use('gwendall:body-events@0.1.6', 'client');
  api.use('simple:highlight.js@1.0.9', 'client');
  api.export('SimpleSlide', 'client');
  api.addFiles(['simple-slide.html', 'simple-slide.js'], 'client');
});
