import Typography from 'typography';

const typeography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  scaleRatio: 8,
  headerFontFamily: ['rift', 'jaf-herb', 'jaf-herb-condensed'],
  bodyFontFamily: ['rift'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      fontWeight: 700,
      lineHeight: 0.9,
      fontSize: '18vw'
    },
    'h2': {
      fontFamily: ['jaf-herb'].join(','),
      fontWeight: 300,
      fontSize: '12vw',
      letterSpacing: '1vw'
    },
    'h3': {
      fontWeight: 600,
      fontSize: '4vw'
    },
    'h4': {
      fontWeight: 600,
      fontSize: '4vw'
    },
    'h5': {
      fontFamily: ['jaf-herb'].join(','),
      fontWeight: 300,
      fontSize: '2.5em',
      letterSpacing: '3px'
    },
    'h6': {
      fontSize: '3vw'
    },
    'p': {
      fontWeight: 600,
      letterSpacing: '1px'
    },
    'button': {
      fontFamily: ['jaf-herb'].join(','),
      letterSpacing: '4px'
    }
  })
});

export const { scale, rhytm, options } = typeography;
export default typeography;
