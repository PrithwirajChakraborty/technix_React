import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import img1 from '../Img/logo.png';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted pt-4'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <img src={img1} className='img-fluid' height={40} width={40} />Tecnicx
              </h6>
              <p>
                Making the imagination possible.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Our Services</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='about' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='digitalmarketing' className='text-reset'>
                  Digital Marketing
                </a>
              </p>
              <p>
                <a href='businessdevelopment' className='text-reset'>
                  Business Development
                </a>
              </p>
              <p>
                <a href='connect' className='text-reset'>
                  Connent
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> BN9 Webel IT Park Saltlake WB 700091 IND<br />
                1901 AH Tower G Noida NCR 201009 IND<br />
                M31 Webel IT Park Durgapur WB 713201 IND<br />
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@tecnixs.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +91 0000000000
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +91 0000000000
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='#'>
          Prithwiraj Chakraborty
        </a>
      </div>
    </MDBFooter>
  );
}