import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
import styles from './HomePage.module.css'

const HomePage = () => {
  const {data} = useOutletContext;
  //const {topAlbums, newAlbums, songs} = data;
  return (
    <div className={styles.homePage}>
    <Hero />
    </div>
  )
}

export default HomePage