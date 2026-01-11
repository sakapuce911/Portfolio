import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import "../assets/styles/Navigation.scss";

const drawerWidth = 240;

const navItems: [string, string][] = [
  ["Expertise", "expertise"],
  ["Career", "career"],
  ["Projects", "tools"],
  ["Education", "education"],
  ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const isDark = mode === "dark";

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) setScrolled(window.scrollY > navbar.clientHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    const nav = document.getElementById("navigation");
    const navHeight = nav?.clientHeight ?? 0;

    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMobileOpen(false);
  };

  // Drawer styles (mode aware)
  const drawerBg = isDark ? "#0d1116" : "#ffffff";
  const drawerText = isDark ? "#ffffff" : "#0d1116";
  const dividerColor = isDark
    ? "rgba(255,255,255,0.12)"
    : "rgba(0,0,0,0.12)";

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      sx={{
        textAlign: "center",
        height: "100%",
        backgroundColor: drawerBg,
      }}
    >
      <p className="mobile-menu-top" style={{ color: drawerText }}>
        <ListIcon /> Menu
      </p>

      <Divider sx={{ borderColor: dividerColor }} />

      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: drawerText,
                "& .MuiListItemText-primary": { color: drawerText },
                "&:hover": {
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.06)"
                    : "rgba(0,0,0,0.04)",
                },
              }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* ✅ THEME TOGGLE (Desktop: icon + label, no switch) */}
          <button
            type="button"
            className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
            onClick={modeChange}
            aria-label="Toggle theme"
          >
            <span className="theme-toggle__iconWrap" aria-hidden="true">
              {isDark ? (
                <DarkModeOutlinedIcon className="theme-toggle__icon" />
              ) : (
                <LightModeOutlinedIcon className="theme-toggle__icon" />
              )}
            </span>

            {/* ✅ label visible ONLY on desktop */}
            <span className="theme-toggle__label">{isDark ? "Dark" : "Light"}</span>
          </button>

          {/* ✅ MENU LINKS (desktop) */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{ color: "#fff" }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: drawerBg,
              color: drawerText,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
