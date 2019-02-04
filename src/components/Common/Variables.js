export const Icons = {
  ICONS16_FAMILY: 'Icons16',
  ICONS20_FAMILY: 'Icons20',

  ICON_SIZE_STANDARD: '16px',
  ICON_SIZE_LARGE: '20Ppx',
};

export const Grids = {
  GRID_SIZE: 10,
};

export const Fonts = {
  FONT_FAMILY:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue',
  FONT_FAMILY_MONOSPACE: 'monospace',

  FONT_SIZE: Grids.GRID_SIZE * 1.4,
  FONT_SIZE_LARGE: Grids.GRID_SIZE * 1.6,
  FONT_SIZE_SMALL: Grids.GRID_SIZE * 1.2,
  FONT_SIZE_XL: Grids.GRID_SIZE * 2,
  FONT_SIZE_XXL: Grids.GRID_SIZE * 4,
  FONT_SIZE_XXXL: Grids.GRID_SIZE * 6,
};

export const Line = {
  LINE_HEIGHT: (Grids.GRID_SIZE * 1.8) / Fonts.FONT_SIZE + 0.0001,
};

export const Buttons = {
  BUTTON_HEIGHT: Grids.GRID_SIZE * 3,
  BUTTON_HEIGHT_SMALL: Grids.GRID_SIZE * 2.4,
  BUTTON_HEIGHT_LARGE: Grids.GRID_SIZE * 4,
};

export const Inputs = {
  INPUT_HEIGHT: Grids.GRID_SIZE * 3,
  INPUT_HEIGHT_LARGE: Grids.GRID_SIZE * 4,
};

export const NavBar = {
  NAVBAR_HEIGHT: Grids.GRID_SIZE * 5,
};

export const Sizes = {
  mobileS: '375px',
  mobileM: '425px',
  mobileL: '768px',
  tablet: '1024px',
  laptop: '1440px',
  laptopL: '2560px',
  desktop: '3000px'
}

export const SizesAsNumbers = {
  mobileS: 375,
  mobileM: 425,
  mobileL: 768,
  tablet: 1024,
  laptop: 1440,
  laptopM: 2048,
  laptopL: 2560,
  desktop: 3000
}

export const Devices = {
  mobileS: `(max-width: ${Sizes.mobileS})`,
  mobileM: `(max-width: ${Sizes.mobileM})`,
  mobileL: `(max-width: ${Sizes.mobileL})`,
  tablet: `(max-width: ${Sizes.tablet})`,
  laptop: `(max-width: ${Sizes.laptop})`,
  laptopL: `(max-width: ${Sizes.laptopL})`,
  desktop: `(max-width: ${Sizes.desktop})`,
  desktopL: `(max-width: ${Sizes.desktop})`
};