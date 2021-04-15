const config = {
  // screens: {
  //   Home: 'home',
  //   Profile: 'profile',
  //   Setting: 'setting',

  //   // Setting: 'setting/:id',
  //   // parse: {id: id => `${id}`},

  //   // Setting: {
  //   //   path: 'setting',
  //   //   screens: {
  //   //     SettingDeatils: 'SettingDeatils',
  //   //     InnerDetailsSetting: {
  //   //       path: 'InnerDetailsSetting/:id',
  //   //       parse: {id: id => `${id}`},
  //   //       exact: true,
  //   //     },
  //   //   },
  //   // },
  // },

  screens: {
    Pofile: 'pofile',
  },
};

const linking = {
  prefixes: ['demo://app/'],
  config,
};

export default linking;
