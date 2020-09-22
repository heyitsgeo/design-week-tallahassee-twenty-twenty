import React from 'react';
import { DateTime } from 'luxon';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import { DefaultLayout } from '../components/layout';
import DonateOrVolunteerPopout from '../components/DonateOrVolunteerPopout';
import { Section } from '../components/Section';
import { Event } from '../components/event/event';


import '../styles/schedule.scss';
import scheduleStyles from './schedule.module.css';

const Schedule = ({ data }) => {
  const {
    allMarkdownRemark
  } = data;

  const events = allMarkdownRemark.edges
    .map(edge => ({
      id: edge.node.id,
      location: edge.node.frontmatter.location,
      name: edge.node.frontmatter.name,
      date: edge.node.frontmatter.date,
      eventUrl: edge.node.frontmatter.eventUrl,
      description: edge.node.html
    }));

  const dateIsInFuture = (date) => {
    const today = DateTime.local();

    if (!(date) || !(date instanceof DateTime)) {
      return false;
    }

    return date < today;
  }

  const upcomingEvents = events.filter(event => !dateIsInFuture(DateTime.fromISO(event.date)));
  const pastEvents = events.filter(event => dateIsInFuture(DateTime.fromISO(event.date)));

  return (
    <DefaultLayout>
      <SEO title="Schedule" description={"Design Week Tallahassee"}/>
      <Section color={"black"}>
        <div className="SchedulePageContent">
          <h1 className={scheduleStyles.pageTitle}>Schedule</h1>
          <p className={scheduleStyles.pageDescription}>We will be dropping new events from now until the end of the year. Check in here or on our  <a href="https://www.facebook.com/designweektally" target="_blank" rel="noopener noreferrer">Facebook</a> to see what's coming next.</p>
          <h5 className={scheduleStyles.upcomingEventsTitle}>Upcoming</h5>
          {upcomingEvents.map(event => (
            <Event
              key={event.id}
              date={event.date}
              name={event.name}
              location={event.location}
              eventUrl={event.eventUrl}
              description={event.description} />
          ))}
          {upcomingEvents.length === 0 && (
            <h4 className={scheduleStyles.noUpcomingEvents}>Check back soon.</h4>
          )}
          <h5 className={scheduleStyles.pastEventsTitle}>Past</h5>
          {pastEvents.map(event => (
            <Event key={event.id} date={event.date} name={event.name} location={event.location} eventUrl={event.eventUrl} />
          ))}
        </div>
      </Section>
      <DonateOrVolunteerPopout style={{bottom: 0, right: 0, position: 'fixed', margin: '1em', width: '320px'}}/>
    </DefaultLayout>
  );
};

export default Schedule;

export const query = graphql`
  query ScheduleQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date },
        filter: { frontmatter: { postType: { eq: "event" } } }
      ) {
        edges {
          node {
          id,
          html
          frontmatter {
              date,
              name,
              location,
              eventUrl,
            }
          }
        }
      }
    }
`;
