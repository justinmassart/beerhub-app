import Colors from './Colors';

const backgrounds = {
  common: {
    primary: ['#42BDAA', '#2C7C70'],
    solidPrimary: ['#17817A', '#17817A'],
    secondary: ['#51AFE7', '#62D2C6'],
    disabled: ['#C3EAE4', '#C3EAE4'],

    error: [Colors.common.error, Colors.common.error],

    facebook: [Colors.common.facebook, Colors.common.facebook],
    google: [Colors.common.google, Colors.common.google],

    green: ['#7ED321', '#7ED321'],
    orange: ['#F5A623', '#F5A623'],
    red: ['#D0021B', '#D0021B'],
    white: ['#FFF', '#FFF'],
    black: ['#000', '#000'],

    pool: ['#17817A', '#17817A'],
    gateway: ['#686DE0', '#686DE0'],
    eco: ['#43D1CD', '#43D1CD'],
    shares: ['#4BCFFA', '#4BCFFA'],
    treatments: ['#42BDAA', '#42BDAA'],
    products: ['#42BDAA', '#42BDAA'],
    valueDetail: ['#42BDAA', '#42BDAA'],
    probe: ['#43D1CD', '#43D1CD'],
    filtration: ['#DFE6E9', '#DFE6E9'],
  },
  light: {
    primary: ['#fff', '#fff'],
    secondary: ['#F4F8F7', '#F4F8F7'],
    tertiary: ['#C3EAE4', '#C3EAE4'],
    quaternary: ['#EFEFEF', '#EFEFEF'],
    background: ['#fff', '#fff'],
  },
  dark: {
    primary: ['#2F2F2F', '#2F2F2F'],
    secondary: ['#363636', '#363636'],
    tertiary: ['#404040', '#404040'],
    quaternary: ['#404040', '#404040'],
    background: ['#1D1D1D', '#1D1D1D'],
  },
};

export default backgrounds;
