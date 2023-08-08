import * as React from 'react';
import { useLocation } from 'react-router-dom'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

import Box from '@mui/joy/Box';
 
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

// Icons import
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';


import BookRoundedIcon from '@mui/icons-material/BookRounded';

// custom
import Menu from './Menu';
import Layout from './Layout';
 
import { NavLink } from 'react-router-dom';

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
          setMode('dark');
        }
      }}
    >
      {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
    </IconButton>
  );
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const linkStyle = {
    textDecoration: 'none', // Quitar subrayado
    color: 'inherit', // Para asegurar que el color del texto se herede del contenedor
  };

  const activeLinkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    backgroundColor: 'lightgrey', // Color de fondo cuando el enlace está activo
  };

  const isActive = (path: string) => {
    
    return location.pathname === path;

  }

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />


      <Layout.Header style={{
        height: '100px',
        overflow: 'hidden'
      }}>
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
              src={"https://github.com/JuanDiegoAlv1234/ImagenesVarias/blob/master/Logo%20negrita.png?raw=true"}
              loading="lazy"
              alt="legado"
              style={{
                maxWidth: '100%', // ensure the image doesn't go out of the box
                width: '150px',
                height: 'auto',
              }}
            />
          </Box>

        </Box>  <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1.5 }}>
          <NavLink to="/talleres" style={linkStyle}>
            <Typography level="h2" fontSize="xl" textColor={"common.white"} sx={{ mb: 0.5 }}>Talleres</Typography>
          </NavLink>

          <NavLink to="/acerca-de" style={linkStyle}>
            <Typography level="h2" fontSize="xl" textColor={"common.white"} sx={{ mb: 0.5 }}>Acerca de </Typography>

          </NavLink>

          <NavLink to="/expositores" style={linkStyle}>
            <Typography level="h2" fontSize="xl" textColor={"common.white"} sx={{ mb: 0.5 }}>Expositores</Typography>

          </NavLink>

          <NavLink to="/registro" style={linkStyle}>
            <Typography level="h2" fontSize="xl" textColor={"common.white"} sx={{ mb: 0.5 }}>Registrarme</Typography>

          </NavLink>

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

    </CssVarsProvider>
  );
}