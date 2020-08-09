import React from 'react'
import { Section } from '../../../Section';
import propTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import './HeroSection.scss';

class HeroSection extends React.Component {
  constructor(props) {
    super(props);

    this.section = null;

    this.setSection = el => this.section = el;

    this.imageContainer = null;

    this.setImageContainer = el => this.imageContainer = el;

    this.imageContainerAlt = null;

    this.setImageContainerAlt = el => this.imageContainerAlt = el;
  }

  positionOnHero = () => {
    if (this.imageContainer) {
      const position = -this.imageContainer.getBoundingClientRect().top - ((this.imageContainer.clientHeight) - window.pageYOffset);
      const clampPos = this.section.clientHeight / 2 - this.imageContainerAlt.clientHeight / 2;
      const lockHeroContainer = window.pageYOffset - window.innerHeight > 0;

      if (position < clampPos) {
        this.imageContainerAlt.style.top = position + 'px';
      }

      if (lockHeroContainer) {
        this.imageContainer.style.position = 'relative';
      } else {
        this.imageContainer.style.position = 'fixed';
      }
    }
  };

  componentDidMount() {
    document.ontouchmove = e => e.preventDefault();
    window.addEventListener('scroll', this.positionOnHero);

    this.resizeFixedImage();
    window.addEventListener('resize', this.resizeFixedImage);
    window.addEventListener('touchmove', (e) => e.preventDefault());
    window.addEventListener('touchstart', (e) => e.preventDefault());
    this.imageContainerAlt.style.top = this.imageContainer.top;
  }

  resizeFixedImage = () => {
    if (this.section && this.imageContainer) {
      const computedStyle = getComputedStyle(this.section);

      const paddingAndMarginLeft = parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.marginLeft);
      const paddingAndMarginRight = parseFloat(computedStyle.paddingRight) + parseFloat(computedStyle.marginRight);

      let width = parseFloat(computedStyle.width) - (paddingAndMarginLeft + paddingAndMarginRight);

      if (width < 1200) {
        this.imageContainer.style.width = width + 'px';
      } else {
        this.imageContainer.style.width = '1200px';
      }
    }
  };

  render() {
    const {
      data
    } = this.props;

    return (
      <div className='desktop-only'>
        <div className="HeroSection">
          <Section color="cream" ref={this.setSection} fixed={true} position={{top: '0'}}>
            <div ref={this.setImageContainer} className="image-container">
              <Img fluid={data.heroImage.childImageSharp.fluid}/>
              <h6 className="dates">August 14 - ONWARD 2020</h6>
            </div>
          </Section>
          <Section color="black" hideOverflow={true} position={{top: '100vh'}}>
            <div ref={this.setImageContainerAlt} className="image-container-alt">
              <Img fluid={data.heroImageAlt.childImageSharp.fluid}/>
              <h6 className="dates">August 14 - ONWARD 2020</h6>
            </div>
          </Section>
        </div>
      </div>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "creatures.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroImageAlt: file(relativePath: { eq: "creatures-alt.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <HeroSection data={data} {...props} />}
    />
)

HeroSection.propTypes = {
  data: propTypes.shape({
    heroImage: propTypes.shape({
      childImageSharp: propTypes.shape({
        fluid: propTypes.shape({
          src: propTypes.string
        }).isRequired
      }).isRequired
    }).isRequired,
    heroImageAlt: propTypes.shape({
      childImageSharp: propTypes.shape({
        fluid: propTypes.shape({
          src: propTypes.string
        }).isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}
