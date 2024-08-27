import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SettingsIcon from '@mui/icons-material/Settings';

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import LayersIcon from '@mui/icons-material/Layers';
// import AssignmentIcon from '@mui/icons-material/Assignment';

const mainList = [
  {
    text: 'Heatmap',
    url: '/',
    icon: <DashboardIcon />
  },
  {
    text: 'Riscos',
    url: '/risks',
    icon: <EditNoteIcon />
  }
];

const secondaryList = [
  {
    text: 'Configurações',
    url: '/settings',
    icon: <SettingsIcon />
  }
];

export const mainListItems = (
  <>
    {mainList.map((item, i) => (
      <ListItemButton key={i} component={Link} to={item.url}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
    </ListSubheader>
    {secondaryList.map((item, i) => (
      <ListItemButton component={Link} to={item.url} key={i}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    ))}
  </>
);