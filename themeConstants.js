
/*
 * Colors
 */
// Experimenting Palettes
export const PRIMARY_BRAND = '#50BEB8'
// think of a the Primary-d2/3
export const PRIMARY_BRAND_D2 = '#25716D'
// Background Colors
export const PRIMARY_BACKGROUND = '#FFFEF6'
// Dark Brand Text Color for Black/Background
export const TEXT_INACTIVE = '#889A94'

// Dark Shades
// Body Copy 0C0524
export const BODY_COPY = '#0C0524'

export const FONT_FAMILY_ROBOTO_SLAB = 'Roboto Slab, serif'
export const FONT_FAMILY_ROBOTO = 'Roboto, sans-serif'
export const FONT_FAMILY_IBM_PLEX = 'IBM Plex Sans, sans-serif'
export const FONT_FAMILY_SOURCE_SANS_PRO = 'Source Sans Pro, sans-serif'
export const FONT_FAMILY_LORA_SANS = 'Lora, sans-serif'

export const THEME = {
  fonts: {
    primaryHeader: FONT_FAMILY_ROBOTO_SLAB,
    secondaryHeader: FONT_FAMILY_SOURCE_SANS_PRO,
    body: FONT_FAMILY_IBM_PLEX,
    accent: FONT_FAMILY_LORA_SANS
  },
  colors: {
    primaryBrand: PRIMARY_BRAND,
    primaryBrandD2: PRIMARY_BRAND_D2,
    primaryBackground: PRIMARY_BACKGROUND,
    textInactive: TEXT_INACTIVE,
    body: BODY_COPY
  },
  fontSize: {
    bodyMobile: '1em',
    bodyTablet: '1.2em',
    bodyDesktop: '1.3em'
  }
}

export const FONT_LOADER_MAPPING = {
  IBM:'family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,700;1,600',
  ROBOTO:'family=Roboto:wght@100;200;300;400;500;600;700',
  ROBOTO_SLAB: 'family=Roboto+Slab:wght@100;300;500;700',
  LORA: 'family=Lora:ital,wght@1,400;1,500;1,600'
}


export const GOOGLE_FONT_TYPE_LOADER = `${FONT_LOADER_MAPPING.ROBOTO_SLAB}&${FONT_LOADER_MAPPING.ROBOTO}&${FONT_LOADER_MAPPING.LORA}&${FONT_LOADER_MAPPING.IBM}`

export default THEME
