import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import '../../../../node_modules/react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

 
const OrderOptionDate = ({setOptionValue, currentValue}) => (
  <div >
    <DatePicker className={styles.input}
      value={currentValue}
      onChange={setOptionValue}
      selected={currentValue}
    />
  </div>
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionDate;