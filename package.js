Package.describe({
  name: 'hexsprite:impersonate',
  summary: 'Impersonate users in Meteor',
  version: '0.2.3',
  git: 'https://github.com/dxrx/meteor-impersonate.git',
})

Package.onUse(function (api, where) {
  api.use(
    [
      'accounts-base@2.0.0',
      'reactive-var@1.0.11',
      // "templating@1.3.2",
      // "gwendall:body-events@0.1.6",
      'tracker@1.2.0',
    ],
    'client',
  )

  api.use(['random@1.2.0', 'alanning:roles@3.0.0'])

  api.addFiles(['server/lib.js'], 'server')

  api.addFiles(['client/lib.js'], 'client')

  api.export('Impersonate')
})
