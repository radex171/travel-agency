import React from 'react';
import PropTypes from 'prop-types';

import DatePicker from 'react-datepicker';
import '../../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

 
class OrderOptionDate  extends React.Component {
    static propTypes = {
      setOptionValue: PropTypes.date,
    }
  state = {
    startDate: new Date(),
  };
 
  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };
 
  render() {
    return (
      <DatePicker className={styles.input}
        selected={this.state.startDate}
        onChange={this.handleChange}
        locale="pl-PL"
      />
    );
  }
}

export default OrderOptionDate; 
