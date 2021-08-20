import React, { useState } from "react";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";




function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Head>
      <AppBar
        style={{ backgroundColor: " #c57b34", height: "82px" }}
        position='static'>
        <Toolbar
          style={{
            display: "flex",
            minHeight: "82px",
            alignItems: "center",
          }}>
          <Nav__image>
            <Link to='/'>
              <img src='/image/image.jpg' alt='' />
            </Link>
          </Nav__image>
          <Nav>
            <Nav__menu
              aria-controls='fade-menu'
              aria-haspopup='true'
              onClick={handleClick}>
              Masters
            </Nav__menu>
            <Menu
              style={{ marginTop: "55px" }}
              id='fade-menu'
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}>
              <Link to='/LocationMaster'>
                <MenuItem onClick={handleClose}>Location Master</MenuItem>
              </Link>
              <Link to='/CompanyMaster'>
                <MenuItem onClick={handleClose}>Company and Master</MenuItem>
              </Link>
              <MenuItem onClick={handleClose}>General Master</MenuItem>
            </Menu>

            <Nav__menu>Inventory Managemnet</Nav__menu>
            <Nav__menu>Customer Management</Nav__menu>
            <Nav__menu>Transactions</Nav__menu>
            <Nav__menu>Bulk Managemnet</Nav__menu>
          </Nav>

          <Nav__button>
            <Button>Login</Button>
          </Nav__button>
        </Toolbar>
      </AppBar>
    </Head>
  );
}

export default Header;

const Head = styled.div``;
const Nav = styled.div` 
display: flex;
flex-grow: 1;
`;
const Nav__image = styled.div`
  height: 60px;
  width: 60px;
  /* position: absolute; */
  z-index: 999;
  img{
    height:100%;
    width: 100%;
    border-radius: 5px;
  }
`;
const Nav__menu = styled.div`
  cursor: pointer;
  font-size: 1.2em;
  margin: 0 15px;
  font-weight: 600;
  background-color: #472509;
  padding: 9px 13px;
  border-radius: 6px;
`;

const Nav__button = styled.div`
 button{
     color: white;
     background-color: black;
 }
`;
