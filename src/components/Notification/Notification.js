import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => (  
  <span className={styles.notify}>{message}</span>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;