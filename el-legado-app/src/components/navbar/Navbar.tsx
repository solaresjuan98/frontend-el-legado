import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CssVarsProvider,
  CssBaseline,
  Box,

  IconButton,
  Typography,

} from '@mui/joy';
import {
    

  MenuRounded , // <-- Importando el ícono del menú

} from '@mui/icons-material';
import Barra from './Barra';
import Layout from './Layout';

export const Navbar = () =>{
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [open, setOpen] = React.useState<
    "top" | "left" | "bottom" | "right" | null
  >(null);
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Layout.Header
        style={{
          height: '100px',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 1,
            gap: 1.5,
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
              src="https://raw.githubusercontent.com/JuanDiegoAlv1234/ImagenesVarias/master/Icono.png"
              loading="lazy"
              alt="legado"
              style={{
                maxWidth: '100%',
                width: '200px',
                height: 'auto',
              }}
            />
            {/* Botón del menú para pantallas pequeñas */}
            <IconButton
              size="sm"
              variant="outlined"
              color="neutral"
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              onClick={() => setOpen("left")}
            >
              <MenuRounded />
            </IconButton>
          </Box>

          {/* Drawer que muestra los NavLink para pantallas pequeñas */}
          <Barra
        title="Drawer Title"
        position="left"
        open={open === "left"}
        onClose={() => setOpen(null)}
      >
   
       
            <Box sx={{ width: 250 }}>
              <NavLink to="/talleres" style={linkStyle} onClick={() => setOpen(null)}>
                <Typography level="h2" fontSize="xl" textColor="common.white" sx={{ mb: 0.5 }}>
                  Talleres
                </Typography>
              </NavLink>
              <NavLink to="/acerca-de" style={linkStyle} onClick={() => setMenuOpen(false)}>
                <Typography level="h2" fontSize="xl" textColor="common.white" sx={{ mb: 0.5 }}>
                  Acerca de
                </Typography>
              </NavLink>
              <NavLink to="/expositores" style={linkStyle} onClick={() => setMenuOpen(false)}>
                <Typography level="h2" fontSize="xl" textColor="common.white" sx={{ mb: 0.5 }}>
                  Expositores
                </Typography>
              </NavLink>
              <NavLink to="/registro" style={linkStyle} onClick={() => setMenuOpen(false)}>
                <Typography level="h2" fontSize="xl" textColor="common.white" sx={{ mb: 0.5 }}>
                  Registrarme
                </Typography>
              </NavLink>
            </Box>
          </Barra>

          {/* NavLink para pantallas grandes */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', gap: 1.5 }}>
            <NavLink to="/talleres" style={linkStyle}>
              <Typography level="h2" fontSize="xl" textColor="common.white" sx={{ mb: 0.5 }}>
                Talleres
              </Typography>
            </NavLink>
            <NavLink to="/acerca-de" style={linkStyle}>
              <Typography level="h2" fontSize="xl" textColor="common.white" sx={{ mb: 0.5 }}>
                Acerca de
              </Typography>
            </NavLink>
            <NavLink to="/expositores" style={linkStyle}>
              <Typography level="h2" fontSize="xl" textColor="common.white" sx={{ mb: 0.5 }}>
                Expositores
              </Typography>
            </NavLink>
            <NavLink to="/registro" style={linkStyle}>
              <Typography level="h2" fontSize="xl" textColor="common.white" sx={{ mb: 0.5 }}>
                Registrarme
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </Layout.Header>
    </CssVarsProvider>
  );
};

 