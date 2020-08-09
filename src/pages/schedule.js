import React from 'react';
import { Section } from '../components/Section';
import ScheduleNavigator from '../components/ScheduleNavigator';
import Layout from '../components/layout';

import '../styles/schedule.scss';
import { graphql } from 'gatsby';
import MonthAgenda from '../components/MonthAgenda';
import SEO from '../components/seo';
import DonateOrVolunteerPopout from '../components/DonateOrVolunteerPopout';
import { getAllDaysBetweenDates, MONTHS } from '../utils/dates.functions';

const colorMap = ['orange', 'pink', 'aqua', 'darkPink', 'blue'];

const Schedule = ({data}) => {
  const fridays = getAllDaysBetweenDates(new Date(2020, 7, 21), new Date(2020, 11, 18), 'friday');
  const fridaysByMonth = fridays.reduce((accum, friday, currentIndex) => {
    const month = friday.getMonth();
    const monthName = MONTHS[month];
    const day = {
      date: friday,
      schedule: []
    }

    if (accum.hasOwnProperty(monthName)) {
      const existingMonth = accum[monthName];
      existingMonth.days ?
        existingMonth.days.push(day) :
        existingMonth.days = [day];
      return accum;
    } else {
      const colorIndex = month % 4;
      const color = colorMap[colorIndex];
      return {
        ...accum,
        [monthName]: {
          days: [day],
          color
        }
      }
    }
  });

  const scheduleLinks = [
    {
      color: colorMap[0],
      monthName: 'August'
    },
    {
      color: colorMap[1],
      monthName: 'September'
    },
    {
      color: colorMap[3],
      monthName: 'October'
    },
    {
      color: colorMap[4],
      monthName: 'November'
    },
    {
      color: colorMap[0],
      monthName: 'December'
    },
  ]

  return (
    <Layout>
      <SEO title="Schedule" description={"Design Week Tallahassee"}/>
      <Section color={"black"}>
        <div className="SchedulePageContent">
          <ScheduleNavigator links={scheduleLinks} />
          <h1 className="coming-soon">Coming Soon</h1>
          {/*{Object.keys(fridaysByMonth).map(monthKey => {*/}
          {/*  return <MonthAgenda*/}
          {/*    key={monthKey}*/}
          {/*    monthName={monthKey}*/}
          {/*    color={fridaysByMonth[monthKey].color}*/}
          {/*    days={fridaysByMonth[monthKey].days}*/}
          {/*  />*/}
          {/*})}*/}
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
