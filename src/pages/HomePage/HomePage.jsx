import React from 'react'
import { useOutletContext } from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
import styles from './HomePage.module.css'
import Section from '../../components/Section/Section';
import { fetchFilters } from '../../api/api';
import Faqs from '../../components/Faqs/Faqs';

const HomePage = () => {
  const {data} = useOutletContext();
  const {topAlbums, newAlbums, songs} = data;
 
  return (
    <div className={styles.homePage}>
    <Hero />
    <div className={styles.wrapper}>
      <Section title="Top Albums" data={topAlbums} type="album"/>
      <Section title="New Albums" data={newAlbums} type="album"/>
      <Section title="Songs" data={songs} filterSource={fetchFilters} type="song"/>
      <Faqs />
    </div>
    </div>
  )
}

export default HomePage