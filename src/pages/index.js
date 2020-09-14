import React from "react"
import { graphql } from 'gatsby';
import { HomeLayout } from '../components/HomeLayout'
import { DefaultLayout } from '../components/layout';
import SEO from '../components/seo';
import { colors } from '../constants/colors';


class IndexPage extends React.Component {
  render() {

    return (
      <DefaultLayout pageColor={colors.cream}>
        <SEO title="Home" description={"Design Week Tallahassee"}/>
        <HomeLayout/>
      </DefaultLayout>
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
    doodleBob: file(relativePath: { eq: "doodle-bob.jpg" }) {
      ...fluidImage
    }
  }
`;
