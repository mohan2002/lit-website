import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import Logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#FF6BFF",
        height: 80,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "80px", marginRight: "10px" }}
          />
        </Box>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Typography variant="h5" fontWeight={600}>
            Welcome 👋🏻
          </Typography>
        </Box>
        {isAuthenticated ? (
          <Box ml={4}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={isMenuOpen}
              onClose={handleClose}
              sx={{ marginTop: 5 }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{ marginBottom: 1, width: 200 }}
              >
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/about");
                  handleClose();
                }}
                sx={{ marginBottom: 1 }}
              >
                <ListItemIcon>
                  <InfoIcon fontSize="small" />
                </ListItemIcon>
                About
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/contact");
                  handleClose();
                }}
                sx={{ marginBottom: 1 }}
              >
                <ListItemIcon>
                  <EmailIcon fontSize="small" />
                </ListItemIcon>
                Contact
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/faq");
                  handleClose();
                }}
                sx={{ marginBottom: 1 }}
              >
                <ListItemIcon>
                  <GroupIcon fontSize="small" />
                </ListItemIcon>
                FAQ
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  logout();
                }}
                sx={{ marginBottom: 1 }}
              >
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <IconButton
            color="inherit"
            onClick={() => {
              navigate("/login");
            }}
          >
            <LoginIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
