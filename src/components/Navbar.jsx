import React from 'react';
import PropTypes from 'prop-types';
import {CssBaseline, AppBar, Toolbar, IconButton, Divider, Drawer, Hidden, List, ListItem} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// import {MenuIcon} from '@material-ui/icons'; 
import logo from '../assets/logo.png';
import NavButton from './NavButton';
import ManageGrid from './ManageGrid';
import website from '../assets/website.svg';
import analytics from '../assets/analytics.svg';
import bag from '../assets/Bag.svg';
import customer from '../assets/customer.svg';
import manage from '../assets/manage.svg';
import document from '../assets/Document.svg';
import setting from '../assets/Setting.svg';
import InputWithIcon from './SearchInput';

const items =  [
  {
    icon: analytics,
    title: 'Analytics',
    link: '/dashboard',
  },
  {
    icon: customer,
    title: 'Customers',
    link: 'customers',
  },
  {
    icon: bag,
    title: 'Billing',
    link: 'billing',
  },
  {
    icon: document,
    title: 'Manage Games',
    link: 'manage-games',
  },
  {
    icon: manage,
    title: 'Account',
    link: 'account',
  },
  {
    icon: website,
    title: 'Website',
    link: 'website',
  },
]

const drawerWidth = 240;

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
      backgroundColor: 'white', 
      height: '14vh',
      boxShadow: 'none',
      justifyContent: 'center',
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
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logo: {
      padding: '1rem',
      marginTop: '1rem'
  },
  item: {
      padding: '0.1rem',
  },
  setting: {
    position: 'absolute',
    bottom: '1%',
    width: '100%'
  }
}));

function Navbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img className={classes.logo} src={logo} alt="logo" />
      <div />
      <List>
        {items.map((data) => (
          <ListItem className={classes.item} key={data.title}>
            <NavButton 
            icon={data.icon} 
            title={data.title} 
            link={data.link}
            />
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" />
      <div className={classes.setting}>
        <NavButton icon={setting} title="Settings" />
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <InputWithIcon />
          <ManageGrid />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
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

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
