import * as React from 'react';
import Container from "@mui/material/Container";
import './Footer.styles.scss';
import Logo from '../../assets/images/logo/logo2@2x.png';
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg';
import {ReactComponent as LinkedInIcon} from '../../assets/icons/linkedin-in.svg';
import {ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import {ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import {ReactComponent as WhatsappIcon } from '../../assets/icons/whatsapp.svg';
import {ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import {ReactComponent as MailIcon } from '../../assets/icons/mail.svg';
import Grid from '@mui/material/Grid';
const Footer = () => {
  return (
    <section className="footer">
      <div className='footer__top'>
        <Container>
          <div className="footer__top-content">
            <Grid container>
              <Grid item xs={12} sm={6} lg={3}>
                <div className="social">
                  <img src={Logo} alt='Logo' />
                  <ul className="social-links">
                    <li>
                      <a href="https://www.twitter.com">
                        <TwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com">
                        <InstagramIcon />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com">
                        <LinkedInIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ul className="nav-links">
                  <li>
                    <a href="https://google.com">Day Charter Yachts</a>
                  </li>
                  <li>
                    <a href="https://google.com">Weekly Charter Yachts</a>
                  </li>
                  <li>
                    <a href="https://google.com">Type of charter</a>
                  </li>
                  <li>
                    <a href="https://google.com">Corporate Charter</a>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ul className="nav-links">
                  <li>
                    <a href="https://google.com">Regions & Destinations</a>
                  </li>
                  <li>
                    <a href="https://google.com">Featured Itineraries</a>
                  </li>
                  <li>
                    <a href="https://google.com">Private Events and Experience</a>
                  </li>
                  <li>
                    <a href="https://google.com">Global Events Calendar</a>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <ul className="contacts">
                  <li>
                    <a href="https://wa.me/123456">
                      <WhatsappIcon />
                      <span className='whatsapp'>+1 917 690 6203</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:2346456345">
                      <PhoneIcon />
                      <span>+1 917 690 6203</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:test@test.com">
                      <MailIcon />
                      <span>info@baroqueyachts.com</span>
                    </a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div className="footer__bottom">
        <p><a href="http://www.test.com">Privacy & policies</a></p>
        <p>© 2022 - Baroque Yachts. All Rights Reserved</p>
      </div>
    </section>
  );
};
export default Footer;