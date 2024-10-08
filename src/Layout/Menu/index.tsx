import React from 'react'
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { List, IconButton, Toolbar, Divider } from '@mui/material';
import { mainListItems, secondaryListItems } from 'Layout/Menu/listItems';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface MenuProps {
    open: boolean
    toggleDrawer: () => void
}

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

const Menu = ({ open, toggleDrawer } : MenuProps) => {
  return (
    <Drawer variant="permanent" open={open}>
        <Toolbar
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
        }}
        >
        <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
        </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
        {mainListItems}
        <Divider sx={{ my: 1 }} />
        {secondaryListItems}
        </List>
    </Drawer>
  )
}

export default Menu
