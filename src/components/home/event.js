import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import event from '../../images/event3.jpg';

const CarouselPage = () => {
  return (
    <div>
      <div style={{ marginTop: '80px', marginBottom: '60px', width: '100%', paddingLeft: '150px', paddingRight: '150px' }}>
        <Typography variant="h2" gutterBottom align='center' style={{ fontWeight: 'bold' }}>
          <Link to="/events" style={{ color: 'inherit', textDecoration: 'none' }}>Events</Link>
        </Typography>
        <Typography variant="subtitle1" gutterBottom align='center' >
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </Typography>


      </div>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          showIndicators={false}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={event}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={event}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={event}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
}

export default CarouselPage; 