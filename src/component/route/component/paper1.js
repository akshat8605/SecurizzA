import React from 'react'
import Paper from '@material-ui/core/Paper';
import link from './link.svg'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const Paper1=()=>(
    <Paper variant="outlined" className="paper-root">
    <div style={{display:'flex'}}> <div className='link'>
         <img src={link} alt="link" height='34px' width='34px'/>
     </div>
     <div>
         <Typography className="Title-Copy-8">
             Installation Script
         </Typography>
         <Typography className="Title-Copy-9">
         Run this installation script on your device you wish to monitor
         </Typography>
     </div>
     </div>
     <div className="copy-link-container" style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
             <Button
             variant="contained"
             color="secondary"
             className='copy-link-button'
             startIcon={<FileCopyIcon />}
               >
                 Copy Link
             </Button>
     </div>
 </Paper>
)
export default Paper1;