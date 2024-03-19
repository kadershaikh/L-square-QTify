import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styles from './SearchBar.module.css';

const SearchBar = ({placeholder}) => {
  const [value, setValue] = useState('');

  return (
    <>
     <div style={{ position: "relative" }}>
      <form
        className={styles.wrapper}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <input
            name="album"
            className={styles.search}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <div>
          <button className={styles.searchButton}>
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
    </>
  )
}

export default SearchBar