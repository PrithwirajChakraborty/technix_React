import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple
} from 'mdb-react-ui-kit';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';

export default function About() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
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
                <h1 className='mb-3'>WE OFFER MODERN SOLUTIONS FOR GROWING BUSINESS</h1>
                <h4 className='mb-3'><hr />We are the fastest growing digital media organisation with an incredible community
                  that provides brand building for better tomorrow.</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MDBContainer>
        <MDBTabs fill className='mb-4 pt-3'>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
              ABOUT
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
              TEAM
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
              INFLUENCERS
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
              AWARDS
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={fillActive === 'tab1'}>
            <MDBContainer className='p-3' >
              <MDBRow>
                <MDBCol md='4' size="12">
                  <h3 className="text-center p-4">WHY TECNICX ?</h3>
                </MDBCol>
                <MDBCol md='8' size="12">
                  <h6 className="pt-4">Tecnixs is a creative media and strategic build up organization who is branding your brand with an impact. We provide a complete specialized solution from digital marketing to business development for the growth of your business and brand building.</h6>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer className='p-3' >
              <MDBRow>
                <MDBCol md='4' size="12">
                  <h3 className="text-center p-4">WHAT BREWS IN OUR BOARDROOMS?</h3>
                </MDBCol>
                <MDBCol md='8' size="12">
                  <h6 className="pt-4">We are a bunch of young, passionate trendsetters who are led by some of the most credible names in the industry. So when you tap onto the digital universe with us, we ensure you are heard without getting lost in the echo of trends.</h6>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <div className='p-5'>
              <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
            </div>
          </MDBTabsPane>
          <MDBTabsPane show={fillActive === 'tab2'}>
            <MDBContainer className='p-3' >
              <MDBRow>
                <MDBCol md='4' size="12">
                  <h3 className="text-center p-4">MEET THE FACES BEHIND TECNICS</h3>
                </MDBCol>
                <MDBCol md='8' size="12">
                  <h6 className="pt-4">We are run by visionaries in the ever expanding universe of digital content. Meet the faces that make Monk-E what it is - a wholesome solution for your digital presence.</h6>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer>
              <MDBRow>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center'>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center'>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center'>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center'>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>

                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center'>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center'>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center'>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center'>
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText>
                        Some quick example
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>

                </MDBCol>
              </MDBRow>
            </MDBContainer>

          </MDBTabsPane>
          <MDBTabsPane show={fillActive === 'tab3'}>
            <h3 className='text-center pt-3'>INFLUENCERS WE HAVE WORKED WITH</h3>
            <MDBContainer className='pt-5'>
              <MDBRow>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center' >
                      <MDBCardTitle>Card title</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center' >
                      <MDBCardTitle>Card title</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center' >
                      <MDBCardTitle>Card title</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center' >
                      <MDBCardTitle>Card title</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center' >
                      <MDBCardTitle>Card title</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center' >
                      <MDBCardTitle>Card title</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center' >
                      <MDBCardTitle>Card title</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBCard style={{ maxWidth: '22rem' }}>
                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                      <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody className='text-center' >
                      <MDBCardTitle>Card title</MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
          <MDBTabsPane show={fillActive === 'tab4'}>
            <MDBContainer className='p-3' >
              <MDBRow>
                <MDBCol md='4' size="12">
                  <h3 className="text-center p-4">AS FEATURED IN THE MEDIA</h3>
                </MDBCol>
                <MDBCol md='8' size="12">
                  <h6 className="pt-4">Interested in our story? Discover the story of the real storytellers through the eyes of print media.</h6>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            <MDBContainer className='pt-3'>
              <MDBRow>
                <MDBCol size='6' sm='3' className='col-example'>
                  <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
                    <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
                    <a href='#!'>
                      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <div className='d-flex justify-content-end align-items-center h-100'>
                          <MDBCard style={{ maxWidth: '22rem' }}>
                            <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                Some quick example
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      </div>
                      <div className='hover-overlay'>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                      </div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
                    <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
                    <a href='#!'>
                      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <div className='d-flex justify-content-end align-items-center h-100'>
                          <MDBCard style={{ maxWidth: '22rem' }}>
                            <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                Some quick example
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      </div>
                      <div className='hover-overlay'>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                      </div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
                    <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
                    <a href='#!'>
                      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <div className='d-flex justify-content-end align-items-center h-100'>
                          <MDBCard style={{ maxWidth: '22rem' }}>
                            <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                Some quick example
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      </div>
                      <div className='hover-overlay'>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                      </div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol size='6' sm='3' className='col-example'>
                <MDBRipple className='bg-image' rippleTag='div' rippleColor='light' style={{ maxWidth: '24rem' }}>
                    <img src='https://mdbootstrap.com/img/new/standard/city/053.webp' className='w-100' />
                    <a href='#!'>
                      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                        <div className='d-flex justify-content-end align-items-center h-100'>
                          <MDBCard style={{ maxWidth: '22rem' }}>
                            <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <MDBCardText>
                                Some quick example
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      </div>
                      <div className='hover-overlay'>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                      </div>
                    </a>
                  </MDBRipple>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
}