// npx uri-scheme open demo://app/profile --ios for chenking in cmd

const config = {
  screens: {
    Home: {
      screens: {
        Setting: {
          screens: {
            InnerDetailsSetting: 'setting/:phone',
          },
        },
        Profile: {
          screen: {
            Profile: 'profile',
            ProfileDetails: 'profiledetails',
          },
        },
      },
    },
  },
};
const linking = {
  prefixes: ['demo://app/'],
  config,
};

export default linking;
