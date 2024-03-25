import React from 'react';
import styles from './Carousel.module.css'

const Carousel = ({data, renderComponent}) => {
  return (
    <div className={styles.carousel}>
        {data.map((item, index) => (
        <div key={index} className={styles.cardItem}>
          {renderComponent(item)}
        </div>
      ))}
    </div>
  )
}

export default Carousel