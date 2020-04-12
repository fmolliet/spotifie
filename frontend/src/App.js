import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FiSearch } from "react-icons/fi";

import './global.css';
import './App.css';

import PlaylistTable from './components/PlaylistTable';
import MediaControlCard from './components/MediaControlCard';
import SideMenu from './components/SideMenu';


const useStyles = makeStyles((theme) => ({
  headerTop:  {
      width: '100%',
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  
  app: {
    height: '100%',
    //maxWidth: 1200,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: '#B3B3B3',
    minHeight: 'calc(100vh - 70px)',
    overflow: 'hidden'
  },
  
  
  search: {
    background: '#FFF',
    borderRadius: 15,
    paddingLeft: 15
  },
  
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
  
}
));

function App() {
  const classes = useStyles();
  
  const [single, setSingle] = useState({});
  const [source, setSource] = useState('http://localhost:3333/listen?id=12870d8c');

  return (
    <>
    <div className={classes.app}>
      
      <SideMenu />
      
      <main >
        <div id="header-top">
        <div className={classes.headerTop}>
          <TextField className={classes.search}
            placeholder="Buscar"
            InputProps={{
              classes,
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <FiSearch />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <h1>Musicas Curtidas</h1>
        
        <input type="button" className="button" value="Tocar" />
        </div>
        
        <PlaylistTable setSource={setSource} setSingle={setSingle}/>
        
        <div className="wrap"></div>
      </main>
      
    </div>
    <footer>
      <MediaControlCard src={source} song={single} />
      
        
    </footer>
    </>
  );
}

export default App;
