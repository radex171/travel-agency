import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  static propTypes = {
    dayValue: PropTypes.string,
    daysValue: PropTypes.string,
    remaindDay: PropTypes.string,
    
  }

  renderTimeToSummer(){
    
    const dayLeft = new Date().setUTCFullYear (new Date(). getUTCFullYear(), 0, 1); 
    const yearFirstDay = Math.floor(dayLeft/86400000); //86400000 is ms in day
    const today = Math.ceil((new Date().getTime()) / 86400000);
 
    const dayOfYear = today - yearFirstDay;
   
    
    if (dayOfYear < '173' & dayOfYear > '0'){
      return ( Math.abs(dayOfYear - '173')  );
    }
    else if (dayOfYear > '266' & dayOfYear < '365') {
      return (Math.abs((dayOfYear - '365') + '173')); // Here calculate from last day (365) to last number day of summer time (266) & add the rest days from first day (1 day of 365 days) to first day summer time (173 day)
    }
    else if ( dayOfYear > '174' & dayOfYear < '265' || dayOfYear < '0') {
      return  null;
    }
    return ;
  }

  render(){
    const remaindDay = this.renderTimeToSummer();
    const {
      dayValue = 'day',
      daysValue = 'days',

    } = this.props;
    return (
      <div className={styles.dayValue}><span className={styles.nrDay}>{remaindDay}</span> {remaindDay < '173' ? daysValue: dayValue || remaindDay == null ? daysValue: null} to summer!</div>
    );
  }
}


export default DaysToSummer ;