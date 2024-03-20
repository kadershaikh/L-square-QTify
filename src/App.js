import React, {useState, useEffect} from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import {fetchTopAlbums, fetchNewAlbums, fetchSongs} from './api/api'

function App() {
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
      // Object.assign would also work
      return { ...prevState, [key]: data };
      });
      });
  }

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
     <StyledEngineProvider injectFirst>
      <Navbar/>
      <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
     </StyledEngineProvider>
    </>
  );
}

export default App;
