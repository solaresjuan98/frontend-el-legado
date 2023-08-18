import * as React from "react";
import { NavLink } from "react-router-dom";
import {
  CssVarsProvider,
  CssBaseline,
  Box,
  IconButton,
  Typography,
} from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import Barra from "./Barra";
import Layout from "./Layout";
import List from "@mui/joy/List";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemButton from "@mui/joy/ListItemButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const Navbar = () => {
  const [open, setOpen] = React.useState<
    "top" | "left" | "bottom" | "right" | null
  >(null);
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Layout.Header
        style={{
          height: "100px",
          overflow: "hidden",
          position: "sticky",
          top: 0,
          zIndex: 1000, // para asegurarte de que esté sobre otros contenidos
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            alignItems: "center",
            justifyContent: "space-between",
            p: 1,
            gap: 1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: { xs: "center", md: "start" }, // Centrar elementos en pantallas pequeñas, alinear al inicio en pantallas grandes
              width: "100%",
              position: "relative",
            }}
          >
            {/* Botón del menú para pantallas pequeñas */}
            <IconButton
              size="sm"
              variant="outlined"
              color="neutral"
              sx={{
                display: { xs: "inline-flex", md: "none" },
                position: "absolute",
                left: "5%", // Se separa un 5% desde la izquierda, pero puedes ajustar este valor a tu gusto
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
              }}
              onClick={() => setOpen("left")}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <NavLink to="/ " style={linkStyle} onClick={() => setOpen(null)}>
              <img
                src="https://raw.githubusercontent.com/JuanDiegoAlv1234/ImagenesVarias/master/Icono.png"
                loading="lazy"
                alt="legado"
                style={{
                  maxWidth: "100%",
                  width: "200px",
                  height: "auto",
                  marginLeft: "90px", // Esto empuja un poco la imagen hacia la derecha en pantallas pequeñas
                }}
              />
            </NavLink>
          </Box>

          {/* Drawer que muestra los NavLink para pantallas pequeñas */}
          <Barra
            title="EL LEGADO"
            position="left"
            open={open === "left"}
            onClose={() => setOpen(null)}
          >
            <Box sx={{ width: 250 }}>
              <List
                component="nav"
                sx={{
                  maxWidth: 320,
                }}
              >
                <ListItemButton>
                  <ListItemDecorator>
                    <ChevronRightIcon />
                  </ListItemDecorator>
                  <NavLink
                    to="/registro"
                    style={linkStyle}
                    onClick={() => setOpen(null)}
                  >
                    Registrate
                  </NavLink>
                </ListItemButton>
                <ListItemButton>
                  <ListItemDecorator>
                    <ChevronRightIcon />
                  </ListItemDecorator>
                  <NavLink
                    to="/talleres"
                    style={linkStyle}
                    onClick={() => setOpen(null)}
                  >
                    Talleres
                  </NavLink>
                </ListItemButton>


                <ListItemButton>
                  <ListItemDecorator>
                    <ChevronRightIcon />
                  </ListItemDecorator>
                  <NavLink
                    to="/acerca-de"
                    style={linkStyle}
                    onClick={() => setOpen(null)}
                  >
                    Acerca de
                  </NavLink>
                </ListItemButton>


                <ListItemButton>
                  <ListItemDecorator>
                    <ChevronRightIcon />
                  </ListItemDecorator>
                  <NavLink
                    to="/expositores"
                    style={linkStyle}
                    onClick={() => setOpen(null)}
                  >
                    Expositores
                  </NavLink>
                </ListItemButton>
                <ListItemButton>
                  <ListItemDecorator>
                    <ChevronRightIcon />
                  </ListItemDecorator>
                  <NavLink
                    to="/hospedaje"
                    style={linkStyle}
                    onClick={() => setOpen(null)}
                  >
                    Hospedaje
                  </NavLink>
                </ListItemButton>
              </List>
             
            </Box>
          </Barra>

          {/* NavLink para pantallas grandes */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              justifyContent: "center", // Esto asegura que los elementos dentro del Box estén centrados horizontalmente
              alignItems: "center", // Esto asegura que los elementos estén centrados verticalmente
              gap: 5,
              width: "100%", // Asegura que el Box ocupe todo el ancho posible
              marginLeft: 30, // Este margen puede ser ajustado según tus necesidades
              // padding: 10
            }}
          >
            <NavLink to="/talleres" style={linkStyle}>
              <Typography
                level="h2"
                fontSize="xl"
                textColor="common.white"
                sx={{ mb: 0.5 }}
              >
                Talleres
              </Typography>
            </NavLink>
            <NavLink to="/acerca-de" style={linkStyle}>
              <Typography
                level="h2"
                fontSize="xl"
                textColor="common.white"
                sx={{ mb: 0.5 }}
              >
                Acerca
              </Typography>
            </NavLink>
            <NavLink to="/expositores" style={linkStyle}  >
              <Typography
                level="h2"
                fontSize="xl"
                textColor="common.white"
                sx={{ mb: 0.5  }}
              >
                Expositores
              </Typography>
            </NavLink>
            <NavLink to="/registro" style={linkStyle}>
              <Typography
                level="h2"
                fontSize="xl"
                textColor="common.white"
                sx={{ mb: 0.5 }}
              >
                Registrarme
              </Typography>
            </NavLink>
            <NavLink to="/hospedaje" style={linkStyle}>
              <Typography
                level="h2"
                fontSize="xl"
                textColor="common.white"
                sx={{ mb: 0.5 }}
              >
                Hospedaje
              </Typography>
            </NavLink>
          </Box>
        </Box>
      </Layout.Header>
    </CssVarsProvider>
  );
};
