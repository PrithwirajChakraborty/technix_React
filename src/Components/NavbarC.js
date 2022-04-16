import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,

  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import logo from '../Img/logo.png';

export default function App() {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer>
      <MDBNavbarBrand href='/'>
            <img
              src={logo}
              height='40'
              alt=''
              loading='lazy'
            />
            Tecnixs
          </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink href='about'className='pl-3 px-2'>
                ABOUT
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='px-2'>
              <MDBNavbarLink href='digitalmarketing'>DIGITAL-MARKETING</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='px-2'>
              <MDBNavbarLink href='businessdevelopment'>BUSINESS-DEVELOPMENT</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='px-2'>
              <MDBNavbarLink href='connect'>CONNECT</MDBNavbarLink>
            </MDBNavbarItem>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}