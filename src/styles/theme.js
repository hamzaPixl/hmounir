import mixins from './mixins';

const light = {
  darknavy: 'rgba(255, 252, 242, 0.85)',
  navy: '#fbfefb',
  lightnavy: '#ffffff',
  lightestnavy: '#bcb8b1',
  navyshadow: 'rgba(2, 12, 27, 0.7)',
  darkslate: '#000000',
  slate: '#082032',
  lightslate: '#082032',
  lightestslate: '#334756',
  white: '#fffbff',
  higlight: '#e63946',
  higlighttint: 'rgba(230, 57, 70, 0.1)',
};

const dark = {
  darknavy: 'rgba(2, 4, 15, 0.85)',
  navy: '#000000',
  lightnavy: '#011627',
  lightestnavy: '#ced4da',
  navyshadow: 'rgba(2, 12, 27, 0.7)',
  darkslate: '#495670',
  slate: '#ffffff',
  lightslate: '#ced4da',
  lightestslate: '#ffffff',
  white: '#e6f1ff',
  higlight: '#e63946',
  higlighttint: 'rgba(230, 57, 70, 0.1)',
};

const theme = isDark => {
  const colors = isDark ? dark : light;
  return {
    bp: {
      mobileS: `max-width: 330px`,
      mobileM: `max-width: 400px`,
      mobileL: `max-width: 480px`,
      tabletS: `max-width: 600px`,
      tabletL: `max-width: 768px`,
      desktopXS: `max-width: 900px`,
      desktopS: `max-width: 1080px`,
      desktopM: `max-width: 1200px`,
      desktopL: `max-width: 1400px`,
    },
    ...colors,
    mixins,
  };
};

export default theme;
