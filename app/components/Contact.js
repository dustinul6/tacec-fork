import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import styles from '../styles.css';
import contactImg from '../images/06_Contact_03.jpg';
import emailIcon from '../images/06_Contact_07-09.png';
import phoneIcon from '../images/06_Contact_07.png';

import ContactData from '../data/ContactData'

export default class Contact extends React.Component {
  render() {
    const lang = this.props.lang || "en";
    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={contactImg} alt="Contact icon image" className={styles.aboutImg}/></div>
        <Container className={styles.landingBody}>
          <Row>
          <Col md="10" md-offset="1">
          {ContactData.contacts.map((section, index) =>
            <div kep={index} className={styles.staffCard}>
              <h3 className={styles.contactHeading}>{section.title[lang]}<span style={{fontSize: 18, float: 'right'}}>{section.subtitle[lang]}</span></h3>
              {section.people.map((person, index) =>
                <p key={index} className={styles.bodyTextAbout} style={index === 0 ? {} : {paddingTop: 40}}>
                  <Col md="4"><span>{person.name[lang]}</span></Col>
                  {person.phone ?
                    (<Col md="4">
                      <img src={phoneIcon} width={25} />
                      <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                        703-399-9888
                      </span>
                    </Col>)
                    : []}
                  <Col md="4" md-offset={person.phone ? 0 : 4}>
                    <img src={emailIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      {person.email}
                    </span>
                  </Col>
                </p>)}
            </div>)}
              {/*<div>
                <h3 className={styles.contactHeading}> LOCAL TAXI </h3>
                <p className={styles.bodyTextAbout}>
                  <Col md="4">
                    <span> Rainbow Cab Services  </span>
                  </Col>
                  <Col md="4" md-offset="4">
                    <img src={phoneIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      (610)696-6060
                    </span>
                  </Col>
                </p>
                <h3 className={styles.contactHeading}> AIRPORT </h3>
                <p className={styles.bodyTextAbout}>
                  <Col md="12">
                    <span> Philadelphia International Airport  </span>
                  </Col>
                  <p> Take Uber or local taxi to the check-in location </p>
                </p>
                <h3 className={styles.contactHeading}> PARKING </h3>
                <p className={styles.bodyTextAbout}>
                  <Col md="8">
                    <span> D Lot / M Lot  </span>
                    <p> Suggestion: park at D lot (no overnight parking) first, check-in <br />
                    and take luggages to room, and then move your car to M lot </p>
                  </Col>
                  <Col md="4">
                    <img src={phoneIcon} width={25} />
                    <span className={styles.bodyTextAbout} style={{marginLeft: '2%'}}>
                      view map
                    </span>
                  </Col>
                </p>
              </div>*/}
	          </Col>
          </Row>
        </Container>
        <div style={{height: 150, width: '100%', backgroundColor: '#64a680'}}>
          <a href="https://tang.regfox.com/tacec-tang-conference-wotd-2017"
            target="_blank">
            <Button color="primary" className={styles.applyNowButton}>Register Now</Button>
          </a>
        </div>
      </div>
    );
  }
}
