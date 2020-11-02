import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {  makeStyles } from '@material-ui/core/styles';
import Paper1 from './component/paper1'
import './component/step.css'
import Paper2 from './component/paper2'
import Divider from '@material-ui/core/Divider';
const drawerWidth = 268;

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    
  },
}));

function Step({route,setRoute}) {
    const classes = useStyles();
  return (
    <div className={`step-root ${classes.root}`}>
        <div className="step-head">
            <Typography className="INSTALL-SOFTWARES">
                INSTALL SOFTWARES
            </Typography>
            <Button color="primary" className="Ill-do-this-later" onClick={()=>setRoute(2)}>
                Ill do this later
            </Button>
        </div>
        <div>
            <Typography className="Get-Securizza-instal">
                Get Securizza installed on {route===1?" your hosts":" docker containers"}
            </Typography>
        </div>
        <div>
            <Typography className="Securizza-uses-an-ef">
            Securizza uses an efficient and powerful agent to monitor users and services activity
            and alert in realtime when suspicous activity is happening. Follow the instructions below
            </Typography>
        </div>
        {route===1?null:(<div>
            <Typography className="Securizza-uses-an-ef" style={{marginTop:'45px'}}>
            Fill in the details of the hosts you wish to setup the installer on
            </Typography>
        </div>)}
       {route===1?<Paper1/>:<Paper2/>}
        <div>
            <Typography className="Title-Copy-10">
            Want to install manually? See the <a href='/' >installation guide pdf</a> 
            </Typography>
        </div>
        <div className="step1-button-container">
            <Typography className="Step-1-of-1">
            Step {route===1?" 1 of 2":" 2 of 3"}
            </Typography>
            {route!==1?<div className="dot-container">
            <span className="dot-done"></span>
            <span className="dot-done"></span>
            <span className="dot"></span>
            </div> : null}
            
            {route!==1?<Divider orientation="vertical" flexItem />:null}
            <Button color="primary" className="goBack" disabled={route===1} onClick={()=>setRoute(1)}>Go Back</Button>
            <Button variant="contained" className='copy-link-button' color="primary" onClick={()=>setRoute(2)}>
            Next
            </Button>
        </div>
    </div>
  );
}

export default Step;
