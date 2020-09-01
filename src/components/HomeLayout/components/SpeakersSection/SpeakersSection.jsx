import React from 'react';
import { Section } from '../../../Section';
import chattySkull from '../../../../images/skull-animation.gif';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import './SpeakersSection.scss';
import Speaker from './components/Speaker';

const SpeakersSection = ({ data }) => {
  const {
    speakers,
    pencilIllustration
  } = data;

  function sortedSpeakers() {
    return speakers.edges.sort((a,b) => {
      if (a.node.sort == null) {
        return 1;
      }

      if (b.node.sort == null) {
        return -1
      }

      return a.node.sort - b.node.sort
    })
      .map(edge => edge.node);
  }

  return (
    <Section color="cream" transitionTop={true}>
      <div id="speakers" className="SpeakersSection-content">
        <div className="SpeakersSection-illustration-pencil">
          <Img fluid={pencilIllustration.childImageSharp.fluid} />
        </div>
        <div className="SpeakersSection-illustration-skull">
          <img src={chattySkull} alt="chatty skull animation"/>
        </div>
        <h2 className='SpeakersSection-title'>Speakers</h2>
        <p className="SpeakersSection-blurb">we are beyond excited to welcome such a creative and inspiring bunch for
          dwt 2020. our speakers and instructors will bring their experiences, skills, trades, processes and lessons
          they’ve learned along the way to share with us in this incredibly impactful week.</p>
          <div className="SpeakersSection-speakers">
            <h1 className="SpeakersSection__placeholder">Announcing Soon</h1>
            {/*{sortedSpeakers().map(node => {*/}
            {/*  return <Speaker key={node.name} speaker={node} />*/}
            {/*})}*/}
          </div>
        </div>
    </Section>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        speakers: allSpeakersJson {
          edges {
            node {
              name
              sort
              img_resource
              title
              social {
                website
                instagram
                facebook
                linkedin
                twitter
                dribble
                instagram_secondary
              }
            }
          }
        }
        pencilIllustration: file(relativePath: {eq: "loopy-pencil.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <SpeakersSection data={data} {...props} />}
  />
)
