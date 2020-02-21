import React from 'react';
import { Section } from '../components/Section';
import ScheduleNavigator from '../components/ScheduleNavigator';
import Layout from '../components/layout';

import '../styles/schedule.scss';
import { graphql } from 'gatsby';
import DayAgenda from '../components/DayAgenda';
import SEO from '../components/seo';
import DonateOrVolunteerPopout from '../components/DonateOrVolunteerPopout';

const colorMap = {
  'wednesday': 'orange',
  'thursday': 'pink',
  'friday': 'aqua',
  'saturday': 'darkPink',
  'sunday': 'blue'
};

const Schedule = ({data}) => {
  const {
    schedule
  } = data;

  return (
    <Layout>
      <SEO title="Schedule" description={"Design Week Tallahassee"}/>
      <Section color={"black"}>
        <div className="SchedulePageContent">
          <ScheduleNavigator />
          {schedule.edges.map(edge => <DayAgenda key={edge.node.id} schedule={edge.node} color={colorMap[edge.node.day.toLowerCase()]} />)}
        </div>
      </Section>
      <DonateOrVolunteerPopout style={{bottom: 0, right: 0, position: 'fixed', margin: '1em', width: '320px'}}/>
    </Layout>
  );
};

export default Schedule;

export const query = graphql`
  query {
      schedule: allScheduleJson {
        edges {
          node {
          id
            day
            date
            agenda {
              key
              start
              end
              title
              description
              event_link
            }
          }
        }
      }
    }
`;
