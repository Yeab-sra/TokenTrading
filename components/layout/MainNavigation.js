import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";

import classes from "./MainNavigation.module.css";
import { useState } from "react";
import Dropdown from "./Dropdown";

const MainNavigation = () => {
  const [isClicked, setIsClicked] = useState(false);

  const dropdownHandler = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return (
    <div>
      <div className={classes.mainNav}>
        <img
          src="data:image/webp;base64,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"
          alt="logo"
        />
        <h2>Matcha</h2>
        <input
          type="text"
          placeholder="Search by token name, symbol, or address ..."
        />
        <div className={classes.navRight}>
          <HomeIcon />
          <p>Home</p>
          <ExploreIcon />
          <p>Trade</p>
          <button
            className="bg-slate-400 px-2 py-1 m-2 rounded-2xl flex flex-column justify-between w-20"
            onClick={dropdownHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isClicked && <Dropdown />}
    </div>
  );
};

export default MainNavigation;

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountCircle from "@mui/icons-material/AccountCircle";
// import MoreIcon from "@mui/icons-material/MoreVert";
// import HomeIcon from "@mui/icons-material/Home";
// import ExploreIcon from "@mui/icons-material/Explore";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// export default function MainNavigation() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = "primary-search-account-menu";
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = "primary-search-account-menu-mobile";
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       {/* <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem> */}
//       {/* <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem> */}
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Profile</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           {/* <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton> */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: "none", sm: "block" } }}
//             className="flex align-middle"
//           >
//             <img
//               src="data:image/webp;base64,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"
//               className="w-10 mx-3"
//             />
//             Matcha
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
//             <IconButton
//               size="large"
//               aria-label="show 4 new mails"
//               color="inherit"
//             >
//               <Badge badgeContent={4} color="error">
//                 <HomeIcon />
//                 <p>Home</p>
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <ExploreIcon />
//                 <p>Trade</p>
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }
