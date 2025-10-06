module.exports = {
    input: [
      'src/**/*.{js,jsx}', 
      '!src/i18.js',
      '!src/locales/**/*', 
    ],
    output: './src/locales/', 
    options: {
      debug: true, 
      func: {
        list: ['i18next.t', 'i18n.t', 't'],
      },
      trans: {
        component: 'Trans',
        i18nKey: 'i18nKey',
        defaultsKey: 'defaults',
        extensions: ['.js', '.jsx'],
        fallbackKey: false 
      },
      lngs: ['en', 'fr', 'de'],
      defaultLng: 'fr',
      defaultValue: '__STRING_NOT_TRANSLATED__', 
      resource: {
        loadPath: 'src/locales/{{lng}}.json', 
        savePath: 'src/locales/{{lng}}.json',
        jsonIndent: 2
      },
      nsSeparator: false,
      keySeparator: false,
      interpolation: {
        prefix: '{{',
        suffix: '}}'
      }
    }
  };