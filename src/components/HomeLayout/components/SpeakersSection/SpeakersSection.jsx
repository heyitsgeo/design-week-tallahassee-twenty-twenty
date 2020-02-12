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
        <div className="overflow-hidden">
          <div className="SpeakersSection-speakers">
            {speakers.edges.map(edge => {
              return <Speaker key={edge.node.name} speaker={edge.node} />
            })}
          </div>
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
