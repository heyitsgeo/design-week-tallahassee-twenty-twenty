import React from 'react';
import { graphql } from 'gatsby';
import { DateTime } from 'luxon';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DonateOrVolunteerPopout from '../components/DonateOrVolunteerPopout';
import Video from '../components/video/video';
import { Section } from '../components/Section';
import watchStyles from './watch.module.css';

const Watch = ({ data }) => {
  const {
    allMarkdownRemark
  } = data;

  const episodes = allMarkdownRemark.edges
    .map(edge => ({
      id: edge.node.id,
      html: edge.node.html,
      videoSrcUrl: edge.node.frontmatter.videoSrcUrl,
      title: edge.node.frontmatter.title,
      date: edge.node.frontmatter.date
    }));

  return (
    <Layout>
      <SEO title="Episodes" description={"Design Week Tallahassee"}/>
      <Section color="alt-black">
        <div className={watchStyles.container}>
          <div className={watchStyles.titleContainer}>
            <h1 className="text--pink">Episodes</h1>
            <h4 className="text--cream">Catch up on Design Week Extended Edition episodes you missed or re-watch your favorite streams as many times as you want.</h4>
          </div>
          {episodes.map(episode => {
            return (
              <div key={episode.id} className={watchStyles.episodeWrapper}>
                <div className={watchStyles.episodeTitleRow}>
                  <h3 className={watchStyles.episodeTitle}>{episode.title}</h3>
                  <p className={watchStyles.episodeMeta}>{DateTime.fromISO(episode.date.replace('.000Z', '')).toLocaleString(DateTime.DATE_FULL)} </p>
                </div>
                <Video videoSrcUrl={episode.videoSrcUrl} videoTitle={episode.title} />
                <div className={watchStyles.episodeDescription} dangerouslySetInnerHTML={{ __html: episode.html }} />
              </div>
            )
          })}
        </div>
      </Section>
      <DonateOrVolunteerPopout style={{bottom: 0, right: 0, position: 'fixed', margin: '1em', width: '320px'}}/>
    </Layout>
  );
};

export const query = graphql`
  query WatchQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { posttype: { eq: "episode" } } }
    ) {
      edges {
        node {
          id,
          html
          frontmatter {
            date,
            title,
            videoSrcUrl
          }
        }
      }
    }
  }
`;

export default Watch;
