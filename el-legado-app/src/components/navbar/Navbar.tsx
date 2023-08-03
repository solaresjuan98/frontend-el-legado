import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import Box from '@mui/joy/Box';

import IconButton from '@mui/joy/IconButton';

import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/joy/Drawer';
// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

 
import BookRoundedIcon from '@mui/icons-material/BookRounded';

// custom
import Menu from './Menu';
import Layout from './Layout';
import Navigation from './Navigation';

function ColorSchemeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="soft" color="neutral" />;
  }
  return (
    <IconButton
      id="toggle-mode"
      size="sm"
      variant="soft"
      color="neutral"
      onClick={() => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export const Navbar=()=> {
    const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      {drawerOpen && (
        <Layout.SideDrawer onClose={() => setDrawerOpen(false)}>
          <Navigation />
        </Layout.SideDrawer>
      )}
      <Layout.Root
        sx={{
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
            md: 'minmax(160px, 300px) minmax(600px, 1fr) minmax(300px, 420px)',
          },
          ...(drawerOpen && {
            height: '100vh',
            overflow: 'hidden',
          }),
        }}
      >
        <Layout.Header>
        <Box
  sx={{
    display: 'flex',
    flexDirection: ['column', 'row'], // stacking boxes vertically on small screens, horizontally on larger screens
    alignItems: 'center',
    justifyContent: 'space-between', // distribute boxes evenly across the main axis
    p: 1, // add some padding around the Box
    gap: 1.5, // keep some gap between the Boxes
  }}
>
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <img
      src={"https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/Logo%20negrita.jpg?raw=true"}
      loading="lazy"
      alt="legado"
      style={{
        maxWidth: '100%', // ensure the image doesn't go out of the box
        width: '120px',
        height: 'auto',
      }}
    /> 
  </Box>
  <Box sx={{ 
      display: 'flex', 
      flexDirection: ['column', 'row'],
      justifyContent: 'space-between',
      alignItems: 'center',
      p: 1, 
      gap: 1.5,
    }}>
  <IconButton 
        size="sm" 
        variant="soft" 
        color="neutral"
        onClick={toggleDrawer}
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <Box>EXPOSITORES</Box>
        <Box>TALLERES</Box>
        <Box>ACERCA DE</Box>
      </Drawer>

      <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Box>EXPOSITORES</Box>
        <Box>TALLERES</Box>
        <Box>ACERCA DE</Box>
      </Box>
    </Box>
</Box>

          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
            <IconButton
              size="sm"
              variant="outlined"
              color="neutral"
              sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
            >
              <SearchRoundedIcon />
            </IconButton>

            <IconButton
              size="sm"
              variant="soft"
              color="neutral"
              component="a"
              href="/blog/first-look-at-joy/"
            >
              <BookRoundedIcon />
            </IconButton>
            <Menu
              id="app-selector"
              control={
                <IconButton
                  size="sm"
                  variant="soft"
                  color="neutral"
                  aria-label="Apps"
                >
                  <GridViewRoundedIcon />
                </IconButton>
              }
              menus={[
                {
                  label: 'Email',
                  href: '/joy-ui/getting-started/templates/email/',
                },
                {
                  label: 'Team',
                  href: '/joy-ui/getting-started/templates/team/',
                },
                {
                  label: 'Files',
                  active: true,
                  'aria-current': 'page',
                  href: '/joy-ui/getting-started/templates/files/',
                },
              ]}
            />
            <ColorSchemeToggle />
          </Box>
        </Layout.Header>
    
 
      </Layout.Root>
    </CssVarsProvider>
  );
}
