import react from 'react';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.spinner}>
      Loading...
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
