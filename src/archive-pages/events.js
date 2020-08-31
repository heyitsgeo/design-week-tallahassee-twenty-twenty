import React from 'react';
import Layout from '../components/layout';
import { Section } from '../components/Section';
import { graphql } from 'gatsby';
import Workshop from '../components/Workshop';
import { DateTime } from 'luxon';

import '../styles/events.scss';
import SEO from '../components/seo';
import DonateOrVolunteerPopout from '../components/DonateOrVolunteerPopout';

export function Events() {

  function orderWorkshops(workshopEdges) {
    return workshopEdges.sort((o1, o2) => {
      return DateTime.fromISO(o1.node.frontmatter.date).ts - DateTime.fromISO(o2.node.frontmatter.date).ts;
    });
  }

  return (
    <Layout>
      <SEO title="Events" description={"Design Week Tallahassee"}/>
      <Section color="cream">
        <div className="EventsPageContent">
          <h2 className="EventsPageContent-page-title">Events</h2>
          {/*<p className="EventsPageContent-about">This is a spot for a lil' blurb or something if there's a lil' blurb we want to add about this section woohoo</p>*/}
        </div>
      </Section>
      <DonateOrVolunteerPopout style={{bottom: 0, right: 0, position: 'fixed', margin: '1em', width: '320px'}}/>
    </Layout>
  )
}

export default Events;
