import React from 'react';
import styles from './HappyHourAdd.scss';

class HappyHourAd extends React.Component {
  render() {
    return (
      <div>
        <h3 className={styles.title}></h3>
        <div className={styles.countdown}></div>
      </div>
    );
  }
}

export default HappyHourAd;