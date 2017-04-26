import React from 'react';

import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Divider from 'muicss/lib/react/divider';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Motion, spring } from 'react-motion';

import styles from '../../styles.css';
import otdImg from '../../images/otd_summit.png';

import logo from '../../images/tacec_logo.png';
import tangLogo from '../../images/tang_logo.png';
import otdLogo from '../../images/otd_logo.png';
import plusSign from '../../images/plusSign.jpg';
import minusSign from '../../images/minusSign.jpg';

import OTDProgramData from '../../data/OTDProgramData';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      clickedTitle: ''
    };
  }

  handleProgramClick = (title) => {
    this.setState({
      open: !this.state.open,
      clickedTitle: title
    });
  }

  render() {
    const lang = this.props.lang;
    const { tab } = this.state;
    const OTDSummitText = (
      <Col md="10" md-offset="1">
        {OTDProgramData.otdIntro[lang]}
        <h3 className={styles.heading}> G0V HACKATHON </h3>
        <div className={styles.headingBottom} />
        {OTDProgramData.g0vIntro[lang]}
      </Col>
    );

    // all arguments are strings
    const OTDProgramBody = ({title, time, speakers, description}) => {
      const { open, clickedTitle } = this.state;
      const amIClicked = open && clickedTitle === title;
      return (
        <div>
          <div className={styles.OTDProgramBody} onClick={() => this.handleProgramClick(title)}>
            <Col md="6">
              <div style={{display: 'flex'}}>
                <img src={amIClicked ? minusSign : plusSign} className={styles.OTDPlusSign} />
                <div className={styles.OTDProgramDesc}>
                  {title[lang]}
                </div>
              </div>
            </Col>
            <Col md="2">
              <div>
                {time}
              </div>
            </Col>
            <Col md="4">
              <div className={styles.OTDProgramSpeakers}>
                {speakers[lang]}
              </div>
            </Col>
          </div>
          <Motion defaultStyle={{ h: 0}} style={{ h: amIClicked ? spring(130) : spring(0)}}>
              {({ h }) =>
                <div className={styles.OTDProgramDetails} style={{height: h}}>
                  <p style={{margin: 30, marginTop: 20}}>{description[lang]}</p>
                </div>
              }
          </Motion>
        </div>
    )};

    const panelDiscussion = (
      <Col md="10" md-offset="1">
        <h3 className={styles.heading}> PANEL DISCUSSION </h3>
        <div className={styles.headingBottom} />
        {OTDProgramData.panelsByDate.map(panel =>
          [
            <img src={panel.dateImageSource} />,
            panel.tracks.map(track =>
              <div>
                <h3 className={styles.OTDProgramHeading}>
                  {track.title[lang]}
                  <span className={styles.OTDProgramSubHeading}>
                    {track.subtitle[lang]}
                  </span>
                </h3>
                {track.sessions.map(data => OTDProgramBody(data))}
              </div>
            )
          ])}
      </Col>
    );

    return (
      <div>
        <div className={styles.aboutImgContainer}><img src={otdImg} alt="OTD Summit image" className={styles.otdImg}/></div>
        <Container className={styles.landingBody}>
        	<Row style={{marginBottom: 55}}>
            {OTDSummitText}
          </Row>
          <Row>
            <Button color="primary" className={styles.OTDButton}>專案列表</Button>
            <Button color="primary" className={styles.OTDButton} style={{marginLeft: window.innerWidth < 500 ? 0 : 7}}>補助辦法</Button>
          </Row>
          <Row>
            {panelDiscussion}
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
