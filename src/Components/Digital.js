import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane, MDBLightbox, MDBLightboxItem, MDBRow, MDBCol
} from 'mdb-react-ui-kit';
import { MDBContainer } from 'mdbreact';

export default function Digital() {
  const [justifyActive, setJustifyActive] = useState('tab1');

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  return (
    <>
      <header>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>TRUST US FOR THE STRATEGIC DIGITAL SOLUTIONS</h1>
                <h4 className='mb-3'><hr />We are the experts of digital marketing providing right strategies, implementation and success.</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MDBContainer className='pt-3'>
        <MDBTabs justify className='mb-3'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Influencer Marketing 
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Social Media Management 
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
            Google Branding 
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab4')} active={justifyActive === 'tab4'}>
              Digital Adverisement
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab5')} active={justifyActive === 'tab5'}>
              Video Production
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === 'tab1'}>
            <MDBLightbox>
              <MDBRow>
                <MDBCol lg='6'>
                  <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                    className='w-100'
                  />
                  <h3 className='text-primary'>Nykaa Man</h3>
                </MDBCol>
                <MDBCol lg='6'>
                  <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/2.webp'
                    className='w-100'
                  />
                  <h3 className='text-primary'>Groww</h3>
                </MDBCol>
              </MDBRow>
              <MDBRow className='pt-3'>
                <MDBCol lg='6'>
                  <MDBLightboxItem
                    disabled
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/3.webp'
                    className='w-100'
                  />
                  <h3 className='text-primary'>Flo Mattress</h3>
                </MDBCol>
                <MDBCol lg='6'>
                  <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/4.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/4.webp'
                    className='w-100'
                  />
                  <h3 className='text-primary'>SkillShare</h3>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol lg='6'>
                  <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                    className='w-100'
                  />
                  <h3 className='text-primary'>Sony Music</h3>
                </MDBCol>
                <MDBCol lg='6'>
                  <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/2.webp'
                    className='w-100'
                  />
                  <h3 className='text-primary'>WOW Skin Science</h3>
                </MDBCol>
              </MDBRow>
              <MDBRow className='pt-3'>
                <MDBCol lg='6'>
                  <MDBLightboxItem
                    disabled
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/3.webp'
                    className='w-100'
                  />
                  <h3 className='text-primary'>Motivating Fitness- GOQii</h3>
                </MDBCol>
                <MDBCol lg='6'>
                  <MDBLightboxItem
                    src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/4.webp'
                    fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/4.webp'
                    className='w-100'
                  />
                  <h3 className='text-primary'>Akash</h3>
                </MDBCol>
              </MDBRow>

            </MDBLightbox>
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === 'tab2'}>
            <MDBRow>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>Nykaa Man</h3>
              </MDBCol>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/2.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>Groww</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow className='pt-3'>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  disabled
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/3.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>Flo Mattress</h3>
              </MDBCol>
            </MDBRow>
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === 'tab3'}>
            <MDBRow>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/1.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/1.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>Sony Music</h3>
              </MDBCol>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/2.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>WOW Skin Science</h3>
              </MDBCol>
            </MDBRow>
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === 'tab4'}>
            <MDBRow className='pt-3'>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  disabled
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/3.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>Motivating Fitness- GOQii</h3>
              </MDBCol>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/4.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/4.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>Akash</h3>
              </MDBCol>
            </MDBRow>
          </MDBTabsPane>
          <MDBTabsPane show={justifyActive === 'tab5'}>
            <MDBRow>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/2.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>Groww</h3>
              </MDBCol>
            </MDBRow>
            <MDBRow className='pt-3'>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  disabled
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/2.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/3.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>Flo Mattress</h3>
              </MDBCol>
              <MDBCol lg='6'>
                <MDBLightboxItem
                  src='https://mdbootstrap.com/img/Photos/Thumbnails/Slides/4.webp'
                  fullscreenSrc='https://mdbootstrap.com/img/Photos/Slides/4.webp'
                  className='w-100'
                />
                <h3 className='text-primary'>SkillShare</h3>
              </MDBCol>
            </MDBRow>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>

  );
}