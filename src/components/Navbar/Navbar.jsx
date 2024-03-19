import React from 'react'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
      <Link style={{marginLeft: '15px'}} to="/">
      <Logo />
      </Link>
    <SearchBar placeholder="search"/>
    <Button>Give Feedback</Button>
    </nav>
    </>
  )
}

export default Navbar