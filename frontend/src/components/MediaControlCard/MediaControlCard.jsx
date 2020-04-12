import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, IconButton, Typography, Slider, Grid   } from '@material-ui/core';
import { FiSkipBack, FiSkipForward, FiPlayCircle, FiRepeat, FiList, FiCast ,FiVolume2, FiMaximize2, FiPauseCircle } from 'react-icons/fi'

import './styles.css';


const useStyles = makeStyles((theme) => ({
  root: {
    
    background: '#282828',
    color: '#b3b3b3',
    height: 100,
    margin: '0 auto',
    boxShadow: 'none'
  },
  details: {
    
    margin: '0 auto',
    display: 'flex',
    flex: '3 1 auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //margin: '0 -3rem',
    
  },
  content: {
   
  },
  cover: {
    width:'100%',
    color: '#B3B3B3'
  },
  controls: {
    width:'50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
    color: '#b3b3b3',
    '&:hover': {
      color: '#FFF',
      cursor: 'pointer'
    }
  },
  playIconMini: {
    height: 20,
    width: 20,
    color: '#b3b3b3',
    '&:hover': {
      color: '#FFF',
      cursor: 'pointer'
    }
  },
}));



function useAudio(url){
  let [audio, setAudio] =  useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    
    playing ? audio.play() : audio.pause();

      
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [playing]);
  
  return [playing, toggle, setAudio];
};


export default function MediaControlCard({src , song}) {
  const classes = useStyles();
  
  const [single, setSingle] = useState({});
  const [volume, setVolume] = useState(30);
  const [time, setTime] = useState(0)
  const [playing, toggle, setAudio] = useAudio(src);

  useEffect( ()=>{
    toggle();
    setAudio(new Audio(src));
  },[src]);
  
  useEffect(()=>{
    setSingle(song);
  },[song]);
  
  const [playColor, setPlayColor] = useState('');

  function handlePlayToggle(){
      if(playColor === '#FFF'){
          setPlayColor('#1CD85E');
      }else {
          setPlayColor('#FFF');
      }
  }
  
  function handleChangeVolume(e, newValue){
      e.preventDefault();
      setVolume(newValue);
  };
  
  function handleChangeTime(e, newTime){
    e.preventDefault();
    setTime(newTime);
  }
  
  
  
  
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {song.name}
          </Typography>
          <Typography variant="subtitle1" >
            {song.nome}
          </Typography>
        </CardContent>
        
        <div className={classes.controls}>
          <div>
          <IconButton aria-label="previous">
             <FiSkipBack className={classes.playIcon}  />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={toggle}>
          {playing === true ? 
                  <FiPauseCircle className={classes.playIcon} onClick={handlePlayToggle} /> :
                  <FiPlayCircle className={classes.playIcon} onClick={handlePlayToggle}  />}
          </IconButton>
          <IconButton aria-label="next">
            <FiSkipForward  className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next">
              <FiRepeat className={classes.playIconMini} />
          </IconButton>
          </div>
          <Grid auto className={classes.cover}>
            <Slider value={time} onChange={handleChangeTime} aria-labelledby="continuous-slider" />
          </Grid>
          
        </div>
        
        <div className="options">
          <div className="buttoms">
            <FiList />
            <FiCast />
            <FiVolume2 />
          </div>
          <div className="volume-control">

          <Grid item xs>
            <Slider value={volume} onChange={handleChangeVolume} aria-labelledby="continuous-slider" />
          </Grid>
          </div>
          <FiMaximize2 />
          
        </div>
        
      </div>
      
    </Card>
  );
}