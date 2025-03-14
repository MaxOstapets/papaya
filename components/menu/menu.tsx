"use client"
import { useState } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { IconButton, Typography, List, Toolbar, CssBaseline, Drawer, Box, styled, useTheme, Stack, TextField, InputAdornment, Avatar, ListItem, ListItemText } from '@mui/material';
import { Item } from './item';
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';

interface AppBarProps extends MuiAppBarProps { open?: boolean }

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
const navLinks = ["All", "Gaming", "Thoughts", "Music", "Thrillers", "Mixes", "Avatar", "Film critisisma", "Korean dramas", "Characters", "Eating"]

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

export const Menu = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => { setOpen(true) };
  const handleDrawerClose = () => { setOpen(false) };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ backgroundColor: "hsla(242, 30%, 16%, 1)", height: "auto", flexDirection: "column", padding: "10px 0 0 0" }}>
          <Stack sx={{ width: "-webkit-fill-available", justifyContent: "space-between", alignItems: "center", display: "flex", flexDirection: "row" }}>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" sx={[{ mr: 2 }, open && { display: 'none' }]}><img src='/images/menu.png' alt='menu' /></IconButton>
            <TextField
              variant='outlined'
              placeholder='Explore'
              sx={{
                color: "white",
                width: "445px",
                height: "55px",
                border: "1px solid hsla(0, 0%, 100%, 0.5)",
                borderRadius: "30px", outline: "none",
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                '& input': { color: "white" },
                justifyContent: "center"
              }}
              slotProps={{
                input: {
                  startAdornment: <InputAdornment position='start'><SearchIcon sx={{ color: "white" }} /></InputAdornment>,
                  endAdornment: <InputAdornment position='start'><MicNoneIcon sx={{ color: "white" }} /></InputAdornment>
                }
              }} />
            <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
              <IconButton sx={{ width: "fit-content" }}><img src="/images/video.png" alt="videos" width={30} /></IconButton>
              <IconButton sx={{ width: "fit-content" }}><img src="/images/bell.png" alt="bell" width={25} /></IconButton>
              <IconButton sx={{ width: "fit-content" }}><Avatar src='/images/avatar.png' /></IconButton>
            </Stack>
          </Stack>
          <List sx={{ display: "flex", alignItems: "center", color: "hsla(0, 0%, 100%, 0.6)", fontSize: "15px", width: "-webkit-fill-available", padding: "10px 20px" }}>
            {navLinks.map((el) => <ListItem key={el}><ListItemText>{el}</ListItemText></ListItem>)}
          </List>
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
          <Stack sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", gap: "110px", color: "white" }}>
            <Typography variant="h6" noWrap component="div">Papaya</Typography>
            <IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <img src="/images/menu.png" alt="menu" className='w-6 h-6' /> : <img src="/images/exit.png" alt='exit' />}</IconButton>
          </Stack>
        </DrawerHeader>
        <List>{defaultItems.map((el) => <Item src={el.icon} key={el.title} primary={el.title} />)}</List>
        <Typography sx={{ color: "white", fontSize: "13px", padding: "0 0 0 20px" }}>MY CHANEL</Typography>
        <List>{myChannel.map((el) => <Item src={el.icon} key={el.title} primary={el.title} />)}</List>
        <Typography sx={{ color: "white", fontSize: "13px", padding: "0 0 0 20px" }}>SUBSCRIPTIONS</Typography>
        <List>{subscriptions.map((el) => <Item src={el.icon} key={el.title} primary={el.title} />)}</List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  )
}