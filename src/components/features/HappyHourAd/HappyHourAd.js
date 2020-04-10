import React from 'react';
import styles from './HappyHourAdd.scss';
import propTypes from 'prop-types';
class HappyHourAd extends React.Component {

  constructor(){
    super();
      
    setInterval(() => this.forceUpdate(), 1000);
  }
    static propTypes = {
      title: propTypes.string,
      promoTitle: propTypes.string,
      
    }
    getCountdownTime(){
      const currentTime = new Date();
      const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));
      
      if(currentTime.getUTCHours() >= 12){
        nextNoon.setUTCDate(currentTime.getUTCDate()+1);
      }
      
      return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
    }
    render() {
      const {title, promoTitle} = this.props;
      return (
        <div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.promoTitle}>{promoTitle}</div>
          <div className={styles.countdown}>{this.getCountdownTime()}</div>
        </div>
      );
    }
}

export default HappyHourAd;