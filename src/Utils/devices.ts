const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1680px',
  desktopL: '1920px',
};

export const Device = {
  mobileS: `only screen and (min-width: ${size.mobileS}) and (max-width: 374px)`,
  mobileM: `only screen and (min-width: ${size.mobileM})  and (max-width: 424px)`,
  mobileL: `only screen and (min-width: ${size.mobileL}) and (max-width: 767px)`,
  tablet: `only screen and (min-width: ${size.tablet}) and (max-width: 1023px)`,
  laptop: `only screen and (min-width: ${size.laptop}) and (max-width: 1439px)`,
  laptopL: `only screen and (min-width: ${size.laptopL}) and (max-width: 1679px)`,
  desktop: `only screen and (min-width: ${size.desktop}) and (max-width: 1919px)`,
  desktopL: `only screen and (min-width: ${size.desktopL}) and screen (max-width: 4080)`,
};
