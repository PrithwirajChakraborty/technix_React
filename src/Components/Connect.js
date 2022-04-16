import { MDBAccordion, MDBAccordionItem, MDBNavbarLink } from 'mdb-react-ui-kit';
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';

export default function Connect() {
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
                <h1 className='mb-3'>RIGHT DIGITAL TOOLS FOR BUSINESS</h1>
                <h4 className='mb-3'><hr />We are providing right digital tools for your customers to connect to your brand.</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MDBContainer className='p-5' >
        <MDBRow>
          <MDBCol md='4' size="12">
            <h3 className="text-center p-4">LIKE WHAT YOU SAW? WORK WITH US</h3>
          </MDBCol>
          <MDBCol md='8' size="12">
            <h6 className="pt-4">Your voice needs to reach to your target audience without getting lost in the echo of trends. We make it happen here.</h6>
            <MDBNavbarLink href='#'>
              Get In Touch!!
            </MDBNavbarLink>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer>
        <MDBRow className='mb-3'>
          <MDBCol md='6' size='12' className='col-example'>
            <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </MDBCol>
          <MDBCol md='6' size='12' className='col-example'>
            <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className='p-5' >
        <MDBRow>
          <MDBCol md='4' size="12">
            <h3 className="text-center p-4">WANT TO JOIN THE MONK-E CLAN?</h3>
          </MDBCol>
          <MDBCol md='8' size="12">
            <h6 className="pt-4">We have been looking out for you! And your expertise in all things innovation!<br /><br />

              At Monk-E, we believe in innovating the content and stories we tell through ingenious minds. We are a clan of dedicated, passionate, multi-skilled think-tanks who are always looking out for more.<br /><br />

              And if this sounds like you, say hello to us with your resume.</h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className='p-5' >
        <MDBRow>
          <MDBCol md='4' size="12">
            <h3 className="text-center p-4">FAQ</h3>
          </MDBCol>
          <MDBCol md='8' size="12">
            <MDBAccordion flush className='pt-3'>
              <MDBAccordionItem className='primary'
                collapseId="flush-collapse1"
                headerTitle="Why should any company go for digital marketing?"
              >
                If you want more traffic to your website, if you want more people to know about your brand, if you want more sales or if you want to grow your business – you should go for digital marketing. It can help you achieve all your goals.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId="flush-collapse2"
                headerTitle="What's Included In Your Social Media Marketing Service?"
              >
                Our social media marketing service provides a complete end-to-end solution, including everything from posting creative designs to community management. So, with our social media marketing team by your side, you don’t have to worry about anything. We handle social media platforms like Facebook, Instagram, Twitter and Pinterest.
              </MDBAccordionItem>
              <MDBAccordionItem className='primary'
                collapseId="flush-collapse3"
                headerTitle="What are the methods you use for business development?"
              >
                There are various methods we use for business development like web app integration, lead generation,  business analysis and even development prediction. These methods will give a boost to your organization.
              </MDBAccordionItem>
              <MDBAccordionItem
                collapseId="flush-collapse4"
                headerTitle="Do you keep your organization up-to-date with industry changes?"
              >
                Certainly, we do! We believe that keeping up-to-date is  the basic responsibility with industry changes. Our team of professionals carry out responsibilities to meet the challenges in digital marketing planning and execution.
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}