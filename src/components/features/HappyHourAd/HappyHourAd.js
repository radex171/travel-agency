import React from 'react';
import styles from './HappyHourAdd.scss';
import propTypes from 'prop-types';
class HappyHourAd extends React.Component {

    static propTypes = {
      title: propTypes.string,
      promoTitle: propTypes.string,
    }
    render() {
      const {title, promoTitle} = this.props;
      return (
        <div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.promoTitle}>{promoTitle}</div>
        </div>
      );
    }
}

export default HappyHourAd;