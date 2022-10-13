import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import classes from './Navbar.module.css'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  { text: "Services List", link: "/services" },
  { text: "Dashboard", link: "/dashboard" },
  { text: "Others", link: "/others" },
  { text: "Blog", link: "/blog" },
  { text: "Contact", link: "/contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ logo, ring }) => {
  const [login, setLogin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        paddingTop: "30px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex",lg:'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      style={{
                        color: "black",
                        display: "block",
                        fontFamily: "poppins",
                        textDecoration: "none",
                      }}
                      to={page.link}
                    >
                      {" "}
                      {page.text}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: "100px",
              marginRight: "100px",
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            {pages.map((page, index) => (
              <Button key={index} onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  sx={{
                    my: 2,
                  }}
                >
                  <NavLink
                    className={
                      location.pathname === "/" ? classes.navHome : null
                    }
                    to={page.link}
                  >
                    {" "}
                    {page.text}
                  </NavLink>
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {login ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  marginLeft: "100px",
                  display: { xs: "flex", md: "flex" },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img src={ring} alt="" width={20} height={20} />
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "poppins", marginLeft: "5px" }}
                >
                  <NavLink
                    className={
                      location.pathname === "/" ? classes.profileColor : null
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </Typography>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
