const colors = {
  white: '#fff',
  black: '#000',
  primary: '#4dc6ff',
  lightGray: '#e5e5e5',
  gray: '#5E5E5F',
  darkGray: '#4a4a4a',
  darkBgCard: '#262626',
  darkColorCard: '#AAAAAA',
  darkPage: '#181818',
  ligthColorCard: '#53535F',
  darkBgSidebar: '#272727',
  lightBgSidebar: '#efeff1',
  darkHoverSidebar: '#383838',
  lightHoverSidebar: '#B6E8FF',
};

const styles = {
  boxShadow: '0px 2px 4px #00000050',
};

export const dark = {
  bgNavbar: colors.black,
  boxShadow: styles.boxShadow,
  primaryColor: colors.primary,
  white: colors.white,
  lightGray: colors.lightGray,
  gray: colors.gray,
  bgPage: colors.darkPage,
  title: colors.white,
  bgCard: colors.darkBgCard,
  colorCard: colors.darkColorCard,
  colorTitleCard: colors.white,
  colorInput: colors.lightGray,
  bgSidebar: colors.darkBgSidebar,
  colorSidebar: colors.lightGray,
  hoverSidebar: colors.darkHoverSidebar,
};

export const light = {
  bgNavbar: colors.white,
  boxShadow: styles.boxShadow,
  primaryColor: colors.primary,
  white: colors.white,
  lightGray: colors.lightGray,
  gray: colors.lightGray,
  bgPage: colors.white,
  title: colors.black,
  bgCard: colors.white,
  colorCard: colors.ligthColorCard,
  colorTitleCard: colors.black,
  inputColor: colors.lightGray,
  bgSidebar: colors.lightBgSidebar,
  colorSidebar: colors.darkGray,
  hoverSidebar: colors.lightHoverSidebar,
};
