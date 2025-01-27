"use client"
import { useState } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { ListItemText, ListItemButton, ListItem, IconButton, Divider, Typography, List, Toolbar, CssBaseline, Drawer, Box, styled, useTheme } from '@mui/material';

interface AppBarProps extends MuiAppBarProps { open?: boolean }

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => { setOpen(true) };
  const handleDrawerClose = () => { setOpen(false) };
  const drawerWidth = 248;
  const defaultItems = [
    {
      title: "Home",
      icon: "/images/home.png"
    },
    {
      title: "Shorts",
      icon: "/images/shorts.png"
    },
    {
      title: "Subscriptions",
      icon: "/images/subscriptions.png"
    },
    {
      title: "Papaya Music",
      icon: "/images/papayaMusic.png"
    }
  ]
  const myChannel = [
    {
      title: "Library",
      icon: "/images/library.png"
    },
    {
      title: "History",
      icon: "/images/history.png"
    },
    {
      title: "Your Videos",
      icon: "/images/yourVideos.png"
    },
    {
      title: "Watch Later",
      icon: "/images/watchLater.png"
    },
    {
      title: "Downloads",
      icon: "/images/downloads.png"
    },
    {
      title: "Show More",
      icon: "/images/showMore.png"
    },
  ]
  const subscriptions = [
    {
      title: "DesignCode",
      icon: "/images/designCode.png"
    },
    {
      title: "Figma",
      icon: "/images/figma.png"
    },
    {
      title: "Sketch",
      icon: "/images/sketch.png"
    },
  ]

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{ open?: boolean }>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={[{ mr: 2 }, open && { display: 'none' }]}>
            <img src='/images/menu.png' alt='menu' />
          </IconButton>
          <Typography variant="h6" noWrap component="div">Papaya Music</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "#2E335A" },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <img src="/images/menu.png" alt="menu" className='w-6 h-6' /> : <img src="/images/exit.png" alt='exit' />}</IconButton>
        </DrawerHeader>
        <List>
          {defaultItems.map((el) => (
            <ListItem key={el.title} disablePadding>
              <ListItemButton>
                <img src={el.icon} alt="icon" />
                <ListItemText primary={el.title} />
              </ListItemButton>
              <Divider />
            </ListItem>
          ))}
        </List>
        <List>
          {myChannel.map((el) => (
            <ListItem key={el.title} disablePadding>
              <ListItemButton>
                <img src={el.icon} alt="" />
                <ListItemText primary={el.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {subscriptions.map((el) => (
            <ListItem key={el.title} disablePadding>
              <ListItemButton>
                <img src={el.icon} alt="" />
                <ListItemText primary={el.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography sx={{ marginBottom: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
}
