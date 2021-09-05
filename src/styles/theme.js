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
  higlight: '#fb3640',
  higlighttint: 'rgba(251, 54, 64, 0.1)',
};

const dark = {
  darknavy: 'rgba(10, 25, 47, 0.85)',
  navy: '#001d3d',
  lightnavy: '#003566',
  lightestnavy: '#233554',
  navyshadow: 'rgba(2, 12, 27, 0.7)',
  darkslate: '#495670',
  slate: '#8892b0',
  lightslate: '#a8b2d1',
  lightestslate: '#ccd6f6',
  white: '#e6f1ff',
  higlight: '#ffc300',
  higlighttint: 'rgba(255, 214, 10, 0.1)',
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
