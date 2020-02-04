import Typography from 'typography';

const typeography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 8,
  headerFontFamily: ['rift', 'jaf-herb', 'jaf-herb-condensed'],
  bodyFontFamily: ['rift'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      fontWeight: 700,
      lineHeight: 0.9
    },
    'h3': {
      fontWeight: 600,
      fontSize: '1.5em'
    },
    'h4': {
      fontWeight: 600,
      fontSize: '1.5em'
    },
    'button': {
      fontFamily: ['jaf-herb'].join(','),
      letterSpacing: '4px'
    }
  })
});

export const { scale, rhytm, options } = typeography;
export default typeography;
