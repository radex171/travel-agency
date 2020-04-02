import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => {
  console.log('currentValue', currentValue);
  return (
    <div
      className={styles.icon}
    >
      {required ? '' : (
        <div key='null' value='' className={styles.icon}>---</div>
      )}
      {values.map(value => (
        <div   className={currentValue === value.id ? styles.iconActive: styles.icon}
          key={value.id} value={value.id} 
          onClick= {() => (setOptionValue(value.id))}
        >
          <Icon name={value.icon} />
          {value.name} ({formatPrice(value.price)}) 
        </div>
      ))}
    </div>
  );};
OrderOptionIcons.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;