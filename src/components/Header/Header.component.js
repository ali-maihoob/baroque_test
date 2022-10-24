import * as React from 'react';
import logo from '../../assets/images/logo/min_logo@2x.png'
import Button from '@mui/material/Button';
import './Header.styles.scss';
import Grid from '@mui/material/Grid';
import MenuItem from "./MenuIItem/MenuItem.component";
import {ReactComponent as ArrowDown} from '../../assets/icons/arrow-down.svg';
import Sidebar from "../Sidebar/Sidebar.component";

const Header = () => {
  return (
    <header className='header'>
      <Grid container>
        <Grid item md={8} sm={6} xs={12}>
          <div className='left-nav'>
            <img src={logo} alt="Baroque logo" className="logo" />

            <nav className='main-nav'>

              <div className='main-nav__item menu'>
                <MenuItem
                  text='Menu'
                  btnId='main-btn'
                  menuId='main-menu'
                  isMain={true}
                  items={[
                    'Home', 'About Us', 'Why Baroque Yachts', 'Contact', 'Legal Notice'
                  ]}
                />
              </div>

              <div className='main-nav__item'>
                <MenuItem
                  text='Yacht Charter'
                  btnId='charter-btn'
                  menuId='charter-menu'
                  items={[
                    'Day Charter Yachts', 'Weekly Charter Yachts', 'Regions & Destinations', 'Featured Itineraries', 'Type of Charter', 'Corporate Charter',
                    'Private Events and Experience', 'Global Events Calendar'
                  ]}
                />
              </div>
              <div className='main-nav__item'>
                <MenuItem
                  text='Yachts For Sale'
                  btnId='sale-btn'
                  menuId='sale-menu'
                  items={[
                    'Yacht For Sale', 'Purchasing a Yacht'
                  ]}
                />
              </div>

              <div className='main-nav__item'>
                <MenuItem
                  text='Yacht Management'
                  btnId='mng-btn'
                  menuId='mng-menu'
                  items={[
                    'Management and Maintenance', 'Charter Management', 'Yacht Building', 'Refit and Restoration'
                  ]}
                />
              </div>

            </nav>
            <Sidebar />
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <nav className='user-nav'>

            <div className='user-nav__inquiry-item'>
              <span className='user-nav__notification'>3</span>
              <span className='user-nav__text'>Inquiry list</span>
            </div>

            <div className='user-nav__user-info'>
              <div className='user-nav__photo'>
                <span>J</span>
              </div>
              <Button
                id="menu-button"
              >
                <span className='user-name'>Mr. John Doe</span>
                <ArrowDown className='icon'/>
              </Button>
            </div>

          </nav>
        </Grid>
      </Grid>
    </header>
  );
};
export default Header;