import React from "react"
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import { element } from 'prop-types'


class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.heroAltImage = null;

    this.setHeroAltImage = element => {
      this.heroAltImage = element;
    }

    this.heroAltContainer = null;

    this.setHeroAltContainer = element => {
      this.heroAltContainer = element
    }

    this.heroImage = null;

    this.setHeroImage = element => {
      this.heroImage = element;
    }

    this.heroContainer = null;

    this.setHeroContainer = element => {
      this.heroContainer = element;
    }

    this.heroContent = null;

    this.setHeroContent = element => {
      this.heroContent = element;
    }
  }

  componentDidMount() {
    this.sizeFixedHeader(this);
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.sizeFixedHeader.bind(this))
  }

  sizeFixedHeader() {
    if (this.heroImage && this.heroContent) {
      console.log(this.heroContent.clientWidth);
      this.heroImage.style.width = this.heroContent.clientWidth + 'px';
    } else {
      console.log("unable to locate")
    }
  }

  handleScroll() {
    var container = document.getElementById('container');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var scrollArea = this.heroAltContainer.clientHeight;

    console.log(this.heroAltContainer.clientHeight);

    var scrollTop = window.pageYOffset || this.heroAltContainer.clientHeight;
    var scrollPercent = scrollTop/scrollArea || 0;

    console.log('test', this.heroContainer.getBoundingClientRect())

    var position = this.heroImage.getBoundingClientRect().top - (this.heroContainer.clientHeight - window.pageYOffset) - 76;

    console.log(this.heroAltImage.scrollTop);

    var clampHeight = window.pageYOffset - this.heroAltContainer.clientHeight;

    console.log(clampHeight);

    if (clampHeight >= 0) {
      this.heroImage.style.position = 'relative';
      return;
    } else {
      this.heroImage.style.position = 'fixed';
    }


    // if (this.heroAltImage.scrollTop > 0) {
    //   return;
    // }
    console.log('offset', this.heroAltContainer.clientHeight / 2);

    console.log('position', position);

    var body = document.getElementsByName('body');


    var top = this.heroImage.offsetTop;
    var containerTop = this.heroAltContainer.offsetTop;

    console.log('container-top:', position);

    console.log('top:', top);

    console.log('scrollPercent', scrollPercent);
    console.log(window.pageYOffset - this.heroAltContainer.clientHeight);

    this.heroAltImage.style.top = position + 'px';

    // if (this.heroAltImage && position < 0) {
    //   this.heroAltImage.style.top = top + 'px';
    //
    //   console.log(this.heroAltImage.style.top)
    // }
    //
    // if (position > 0) {
    //   this.heroAltImage.style.position = 'relative';
    //   this.heroAltImage.style.top = '50%';
    //   this.heroAltImage.style.transform = 'translateY(-50%)';
    //   this.heroAltImage.style.padding = 0;
    //
    //   this.heroImage.style.position = 'relative';
    //
    // } else {
    //   this.heroAltImage.style.position = 'absolute';
    //   this.heroAltImage.style.paddingLeft = 'inherit';
    //   this.heroAltImage.style.paddingRight = 'inherit';
    //   this.heroAltImage.style.transform = 'translateY(0)';
    //
    //   this.heroImage.style.position = 'fixed';
    // }
  }

  render() {

    return (
      <Layout className="layout">
        {/*<div className="wrapper">*/}
          <section ref={this.setHeroContainer} className="section parallax hero bg1">
            <div ref={this.setHeroContent} className="content">
              <h3>Design Week Tallahassee</h3>
              <div ref={this.setHeroImage} className="hero-image">
                <Img fluid={this.props.data.hero.childImageSharp.fluid} />
              </div>
            </div>
          </section>
          <section ref={this.setHeroAltContainer} className="section parallax hero dark bg2">
            <div className="content">
              <div ref={this.setHeroAltImage} className="hero-image alt">
                <Img fluid={this.props.data.heroAlt.childImageSharp.fluid} />
              </div>
            </div>
          </section>
          <section className='section parallax cta dark'>
            <div className='content snag-tickets'>
              <h1>Design Week Tallahassee</h1>
              <div className="row">
                <h3>A 5 day event that welcomes creatives of all <span className='underline pink'>creeds</span> and <span className='underline orange'>kinds</span></h3>
                <button className='btn' type='button'>
                  <span>Snag Tickets</span>
                </button>
              </div>
            </div>
          </section><section className='section parallax about blue'>
            <div className='content'>
              <div className="creature-of-habit">
                <Img fluid={this.props.data.creaturesOfHabit.childImageSharp.fluid} />
              </div>
                <h1>Breaking Creatives out of Toxic Work Patterns</h1>
                <h4>More indepth little blurb here if we would like something about the different creatures of habits we can have or how we plan to break them down at this year’s design week.</h4>
            </div>
          </section>
        {/*</div>*/}
      </Layout>
    )
  }
}

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "creatures.png" }) {
      ...fluidImage
    }
    heroAlt: file(relativePath: { eq: "creatures-alt.png" }) {
      ...fluidImage
    }
    creaturesOfHabit: file(relativePath: { eq: "creatures-of-habit-horizontal.png" }) {
      ...fluidImage
    }
  }
`
