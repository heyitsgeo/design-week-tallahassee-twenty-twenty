import React from 'react';
import LinkButton from '../LinkButton';
import Popout from '../Popout';

const DonateOrVolunteerPopout = ({...rest}) => {
 return (
   <Popout className='DonateOrVolunteerPopout' {...rest}>
     <div className="DonateOrVolunteerPopout--content" style={{marginRight: '2em'}}>
       <h3 style={{marginBottom: '0.5em'}}>We do our best to make this event as accessible as possible.</h3>
       <p style={{marginBottom: '1em'}}>Get Involved!</p>
       <div style={{maxWidth: '240px'}}>
         <LinkButton styleClass="secondary" style={{marginBottom: '1.5em'}} href="https://www.venmo.com/AIGA-Tallahassee">
           <span>Donate To AIGA</span>
         </LinkButton>
         <LinkButton styleClass="secondary" href="https://forms.gle/MiMJguWSZAmrbig39">
           <span>Volunteer</span>
         </LinkButton>
       </div>
     </div>
   </Popout>
 )
};

export default DonateOrVolunteerPopout;
