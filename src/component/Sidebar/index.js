import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../logo.png'
import './sidebar.css'
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DoneIcon from '@material-ui/icons/Done';

const drawerWidth = 268;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar:{
    margin:'10px'
  }
}));

function SideBar(props) {
  const { open, handleClose } = props;
  const [expanded, setExpanded] = React.useState(true);
  const classes = useStyles();
  //main drawer components
  const drawer = (
    <div className="drawer-root">
      <div className={classes.toolbar} >
          <img src={logo} alt="logo"/>
      </div>
      <Divider />
      <div className="drawer"> 
        <Typography variant="h6" className="hello-bruce">
            Hello, Bruce
        </Typography>
        <Typography variant="body2" className="Title-Copy">
            Getting Started!
        </Typography>
        <Typography variant="body2" className="Title-Copy-2 ">
            Great to have you onboard!
            Lorem ipsum dolor sit amet
        </Typography>
        <Accordion expanded={expanded} onChange={()=>setExpanded(!expanded)}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:'white'}}/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{padding:'0px'}}
            >
            <Typography className="ONBOARDING-SETUP">ONBOARDING SETUP</Typography>
            </AccordionSummary>
            <AccordionDetails   style={{padding:'0px',display:'block'}}>
            <div className="add-user-container">
                <Typography className="Add-Users">
                    Add Users  
                </Typography>
                <div className="done-container">
                <DoneIcon className="done"/>
                </div>
            </div>
            <div className="Rectangle-button">
            <Typography className="Install-Software">  
                Install Software
            </Typography>
            <Typography className="-of-2">  
                1 of 2
            </Typography>
            </div>
            <div>
            <Typography className="Product-walkthrough ">  
                Product walkthrough
            </Typography>
            </div>
            </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={open}
            onClose={()=>{handleClose(false)}}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

SideBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SideBar;
