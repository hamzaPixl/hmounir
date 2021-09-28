module.exports = {
  general: {
    lastName: 'Mounir',
    firstName: 'Hamza',
    email: 'hmounir.work@gmail.com',
    birth: '1996-02-23',
    title: 'Software Engineer',
    location: 'Bruxelles, Belgium',
  },
  skills: [
    'Database analyse',
    'Backend support',
    'DevOps and maintaining',
    'Production support',
    'Web applications',
    'Web services',
  ],
  techs: ['JavaScript', 'TypeScript', 'Nestjs', 'React', 'Docker', 'Nodejs'],
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/hamzaPixl/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hamza.pixl/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/pixlhamza',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hamza-mounir-0a7bb6139/',
    },
  ],
  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Posts',
      url: '/#posts',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],
  colors: {
    highlight: '#ff3344',
    lightDark: '#0d1b2a',
    dark: '#25466b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
