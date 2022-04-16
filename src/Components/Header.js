import React from "react";
import Carousel from "react-multi-carousel";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBNavbarLink, MDBCard, MDBCardBody, MDBCardImage,MDBBtn } from "mdb-react-ui-kit";
import img1 from '../Img/awards1.jpg';
import img2 from '../Img/awards3.jpg';
import img3 from '../Img/awards4.jpg';
import img4 from '../Img/homepage/custom1.png';
import img5 from '../Img/homepage/custom2.png';
import img6 from '../Img/homepage/custom3.png';
import img7 from '../Img/homepage/custom4.png';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Header = () => {
    return (
        <>
        <div>
        <header>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: 400 }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>WELCOME TO TECNIXS WORLD</h1>
                <h4 className='mb-3'><hr />We are the fastest growing digital media organisation with an incredible community
                  that provides brand building for better tomorrow.</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
            <div className="mobile-only show-on-ipad">
                <div>
                    <section className="mobile-landing-section1">
                        <div>
                            <p className=" b landing-para">A creative organisation, committed to helping enterprises with holistic
                                marketing and promotional solutions.</p>
                        </div>
                        <div>
                            <div className="my-mobile-landImg1"><img src={img4} alt="work-moto"
                                className="imgoverl" />
                                <a href="/">
                                    <h5 className="imgName"><span>Influencer<br/> Marketing </span></h5>
                                </a>

                            </div>
                            <div className="my-mobile-landImg2"><img src={img5} alt="work-moto"
                                className="imgoverl"/>
                                <a href="/">
                                    <h5 className="imgName"><span>Social Media <br/> Management </span></h5>
                                </a>

                            </div>
                            <div className="my-mobile-landImg3  not-on-ipad"><img src={img6}
                                alt="work-moto" className="imgoverl"/>
                                <a href="/">
                                    <h5 className="imgName"><span>Talent<br/> Management </span></h5>
                                </a>

                            </div>
                            <div className="my-mobile-landImg4 not-on-ipad"><img src={img7}
                                alt="work-moto" className="imgoverl"/>
                                <a href="/">
                                    <h5 className="imgName"><span>Video <br/> Production </span></h5>
                                </a>

                            </div>
                        </div>
                    </section>
                </div>
            </div>


        </div>
            <MDBContainer className="abc">
                <MDBRow>
                    <MDBCol md='4' size="12">
                        <h1 className="text-center p-4">WHO ARE WE?</h1>
                    </MDBCol>
                    <MDBCol md='8' size="12">
                        <h5 className="pt-4">Tecnixs is a creative media and strategic build up organization who is branding your brand with an impact. We provide a complete specialized solution from digital marketing to business development for the growth of your business and brand building.</h5>
                        <MDBNavbarLink href='#'>
                            Read Our Story Here
                        </MDBNavbarLink>
                        <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer className="pt-5">
                <MDBRow>
                    <MDBCol md='4' size="12">
                        <h1 className="text-center p-4">OUR MILESTONES SO FAR</h1>
                    </MDBCol>
                    <MDBCol md='8' size="12">
                        <h4 className="pt-4 text-primary">Achievements</h4>
                        <h5>As a new-age media start-up, our work has been consistently recognised by various reputed media platforms. We are glad to share our achievements with you.</h5>
                        <hr />
                        <MDBRow className="m-5 py-2">
                            <MDBCol md='4' size='12' className='col-example'>
                                <img src={img1} className='img-fluid shadow-4' alt='...' />
                            </MDBCol>
                            <MDBCol md='4' size='12' className='col-example'>
                                <img src={img2} className='img-fluid shadow-4' alt='...' />
                            </MDBCol>
                            <MDBCol md='4' size='12' className='col-example'>
                                <img src={img3} className='img-fluid shadow-4' alt='...' />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="m-5 py-2">
                            <MDBCol md='4' size='12' className='col-example'>
                                <img src={img1} className='img-fluid shadow-4' alt='...' />
                            </MDBCol>
                            <MDBCol md='4' size='12' className='col-example'>
                                <img src={img2} className='img-fluid shadow-4' alt='...' />
                            </MDBCol>
                            <MDBCol md='4' size='12' className='col-example'>
                                <img src={img3} className='img-fluid shadow-4' alt='...' />
                            </MDBCol>
                        </MDBRow>

                        <h4 className="pt-4 text-primary">Featured Projects</h4>
                        <h5>In the past couple of years, we have created trends, curated brand reputations and shaped quite a few talents. Want your minds to be blown away? Browse through our case studies.</h5>
                        <hr />
                        <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
                        <h4 className="pt-4 text-primary">Nykaa Man</h4>
                        <h5>We launched the brand's virtual identity on Instagram and educated Indian men about grooming related issues with a unique set of content blended with humor and infotainment.</h5>
                        <MDBNavbarLink href='#'>
                            See All Projects
                        </MDBNavbarLink>

                        <Carousel responsive={responsive}>
                            <div><img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' /></div>
                            <div><img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' /></div>
                            <div><img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' /></div>
                            <div><img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' /></div>
                        </Carousel>
                        <MDBNavbarLink href='#'>
                            See Brands And Testimonials
                        </MDBNavbarLink>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='4' size="12">
                        <h1 className="text-center p-4">AS FEATURED IN THE MEDIA</h1>
                    </MDBCol>
                    <MDBCol md='8' size="12">
                        <h5 className="pt-4">Interested in our story? Discover the story of the real storytellers through the eyes of print media.</h5><hr />
                        <MDBCard className="pl-5" style={{ maxWidth: '750px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <h3>How this 26-yr-old serial entrepreneur went from engineering to influencing: the story of BeerBiceps</h3>
                                        <h6>Better known as BeerBiceps in the digital space, Ranveer Allahbadia is among the OG influencers...</h6>
                                        <MDBNavbarLink href='#'>
                                            Read more
                                        </MDBNavbarLink>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                        <hr />
                        <MDBCard className="pl-5" style={{ maxWidth: '750px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <h3>TechSparks 2019: Fitness-vlogging duo breaks down the promises and pitfalls of influencer marketing</h3>
                                        <h6>Social media is very quickly taking over the world. While some people while away their time ...</h6>
                                        <MDBNavbarLink href='#'>
                                            Read more
                                        </MDBNavbarLink>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                        <hr />
                        <MDBCard className="pl-5" style={{ maxWidth: '750px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <h3>'The Ranveer Show' Featuring Beer Biceps Is Now One Of The Most Popular Podcasts In India.</h3>
                                        <h6>The digital superstars of today, who also go by ‘influencers’ or ‘content creators’, are the ones ...</h6>
                                        <MDBNavbarLink href='#'>
                                            Read more
                                        </MDBNavbarLink>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard><hr />
                        <MDBBtn className='mx-2' rounded color='success'>
                            See More
                        </MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    );
}

export default Header;