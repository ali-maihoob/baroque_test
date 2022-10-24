import React from 'react';
import Button from "@mui/material/Button";
import {ReactComponent as MenuIcon} from "../../../assets/icons/menu-symbol.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MenuItemComponent = ({btnId, menuId, text, isMain, items}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };
  return (
    <>
      <Button
        id={btnId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {isMain && <MenuIcon className='menu-icon'/>}
        {text}
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': btnId,
        }}
      >
        {
          items.map((item, index) => {
            return (
              <MenuItem onClick={handleClose} key={index}>{item}</MenuItem>
            );
          })
        }
      </Menu>
    </>
  );
};

export default MenuItemComponent;