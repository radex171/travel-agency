import React from 'react';
import styles from './HappyHourAd.scss';
import PropTypes from 'prop-types';

class HappyHourAd extends React.Component {
  
  static propTypes = {
    title: PropTypes.string,
  }
  render() {
    const {title} = this.props;
    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}></div>
      </div>
    );
  }
} 

export default HappyHourAd;