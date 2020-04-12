import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Paper } from '@material-ui/core';
import { FiClock , FiThumbsUp, FiPlay} from 'react-icons/fi'

import api from '../../services/api';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      background: '#181818',

    },
    cell: {
        color:'white',
        borderBottom: '0.3px solid #282828',
        '&:hover': {
            color: '#1CD85E',
            cursor: 'pointer'
        }
    },
    headers: {
        color:'white',
        borderBottom: '0.3px solid #282828',
    }
    
  });
  

export default function PlaylistTable({ setSource, setSingle }) {
    const classes = useStyles();
    
    const [singles, setSingles] = useState([]);
    
    function handlePlay(id, name, nome ){
        let url = `http://localhost:3333/listen?id=${id}`
        setSingle({name, nome})
        setSource(url);
    }
    
    useEffect(()=>{
        api.get('singles').then( response => {
            setSingles(response.data)
            setSingle(response.data[0])
        })
    },[]);
  
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.headers}></TableCell>
              <TableCell className={classes.headers}>Titulo</TableCell>
              <TableCell className={classes.headers} align="right">Artista</TableCell>
              <TableCell className={classes.headers} align="right"><FiClock size={18} color="#9F9F9F"  /></TableCell>
              <TableCell className={classes.headers} align="right"><FiThumbsUp size={18} color="#9F9F9F" /></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {singles.map((single) => {
              
              let ms = parseInt(single.size)/30;
              let min = Math.floor((ms/1000/60) << 0);
              let sec = Math.floor((ms/1000) % 60);

              return (
                <TableRow key={single.id} className={classes.cell} >
                <TableCell className={classes.cell} align="right"><FiPlay className="back-link" size={18} color="#FFF" onClick={()=>{ handlePlay(single.id, single.name, single.nome) }} /></TableCell>
                <TableCell className={classes.cell} component="th" scope="row">
                  {single.name}
                </TableCell>
                <TableCell className={classes.cell} align="right">{single.nome}</TableCell>
            <TableCell className={classes.cell} align="right">{`${min}:${sec}`}</TableCell>
                <TableCell className={classes.cell} align="right">||||||</TableCell>
              </TableRow>
            
              );
            })
            }
              
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  