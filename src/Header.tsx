import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#F3F3F3",
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  textAlign: "center",
});

const StyledMenu = styled(Box)(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const StyledDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "100%",
  },
});

const StyledList = styled(List)({
  width: "100%",
  marginTop:"50px",
  "& .MuiListItemText-root":{
    display:"flex",
    justifyContent:"center"
  }
});

const StyledListItem = styled(ListItem)({
  textAlign: "right",
});

const StyledCloseIconButton = styled(IconButton)(({ theme }: { theme: Theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
}));

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <StyledTypography style={{display:"flex",justifyContent:"space-between",cursor:"pointer"}} color="#000" variant="h6">Farid Jafarzada Blog</StyledTypography>
          <StyledMenu>
            <StyledListItem>
              <ListItemText style={{color:"#000",cursor:"pointer",visibility:"hidden"}} primary="Home" />
            </StyledListItem>
            <StyledListItem>
              <ListItemText style={{color:"#000",cursor:"pointer", whiteSpace:"nowrap",visibility:"hidden"}} primary="My Resume" />
            </StyledListItem>
            <StyledListItem>
              <ListItemText style={{color:"#000",cursor:"pointer"}} primary="Giriş" />
            </StyledListItem>

          </StyledMenu>
          <StyledIconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon style={{color:"black"}} />
          </StyledIconButton>
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        <StyledCloseIconButton
          color="inherit"
          aria-label="close"
          onClick={toggleDrawer}
        >
          <CloseIcon />
        </StyledCloseIconButton>
        <Divider />
        <StyledList>
        <StyledListItem  onClick={toggleDrawer}>
            <ListItemText  primary="Giriş" />
          </StyledListItem>
          <StyledListItem  onClick={toggleDrawer}>
            <ListItemText style={{visibility:"hidden"}} primary="Home" />
          </StyledListItem>
          <StyledListItem  onClick={toggleDrawer}>
            <ListItemText style={{visibility:"hidden"}} primary="My Resume" />
          </StyledListItem>
          <StyledListItem  onClick={toggleDrawer}>
            <ListItemText style={{visibility:"hidden"}} primary="Projects" />
          </StyledListItem>
          <StyledListItem  onClick={toggleDrawer}>
            <ListItemText style={{visibility:"hidden"}} primary="Todo List" />
          </StyledListItem>
        </StyledList>
      </StyledDrawer>
    </Box>
  );
};

export default Header;

