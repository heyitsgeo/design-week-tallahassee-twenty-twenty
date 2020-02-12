import React from 'react';
import propTypes, { bool } from 'prop-types';

import './Section.scss';

export const Section = React.forwardRef((props, ref) => {
  const {
    children,
    color,
    fillScreen,
    hideOverflow,
    fixed,
    position,
    transitionTop,
    transitionBottom,
  } = props;

  const classList = [
    `Section`,
    color,
    fillScreen && `fill-viewport`,
    hideOverflow && `hide-overflow`,
    fixed && `fixed`,
  ].join(' ');

  let style = {};

  if (position) {
    style = {
      ...style,
      ...{
        top: position.top != null ? position.top : undefined,
        bottom: position.bottom != null ? position.bottom : undefined,
        left: position.left != null ? position.left : undefined,
        right: position.right != null ? position.right : undefined,
      },
    };
  }

  const path = 'M0,64L30,74.7C60,85,120,107,180,128C240,149,300,171,360,170.7C420,171,480,149,540,122.7C600,96,660,64,720,90.7C780,117,840,203,900,208C960,213,1020,139,1080,138.7C1140,139,1200,213,1260,234.7C1320,256,1380,224,1410,208L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z';


  return (
    <section ref={ref} className={classList} style={style}>
      {transitionTop &&
      <svg className='Section-transition top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
           preserveAspectRatio="none">
        <path
          d={path}/>
      </svg>}
      <div className="content">
        {children}
      </div>
      {transitionBottom &&
      <svg className='Section-transition bottom' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
           preserveAspectRatio="none">
        <path
          d={path}/>
      </svg>}
    </section>
  );
});

Section.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node,
  ]).isRequired,
  color: propTypes.oneOf(['cream', 'black', 'pink', 'blue', 'orange', 'aqua']).isRequired,
  fillScreen: propTypes.bool.isRequired,
  hideOverflow: bool.isRequired,
  fixed: bool.isRequired,
  position: propTypes.shape({
    top: propTypes.string,
    left: propTypes.string,
    right: propTypes.string,
    bottom: propTypes.string,
  }),
  transitionTop: bool,
  transitionBottom: bool,
};

Section.defaultProps = {
  color: 'black',
  fillScreen: true,
  hideOverflow: false,
  fixed: false,
  transitionTop: false,
  transitionBottom: false,
};


