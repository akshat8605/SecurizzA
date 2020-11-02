import React from 'react'
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from '@material-ui/core/InputLabel';

const Paper2=()=>(
    <Paper variant="outlined" className="paper-root" style={{marginTop:'15px'}}>
    <div className="select-container">
        <span className="select-label">Add Host</span>
    <Select className="select1"  value={10}>
          <MenuItem value={10}>Select Category</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        
  <TextField id="filled-basic" className="select2" label="Type host details" variant="outlined"/>
  <IconButton>
      <CloseIcon/>
  </IconButton>
  <IconButton>
      <DoneIcon/>
  </IconButton>
    </div>
 </Paper>
)
export default Paper2;