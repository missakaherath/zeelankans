import React , { Component } from 'react'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { MDBLightbox } from 'mdbreact';
import { Autorenew } from '@material-ui/icons';

class Automotive extends Component{

    state = {
        noMargins: [
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).jpg' },
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).jpg' },
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).jpg' },
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).jpg' },
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).jpg' },
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).jpg' },
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(148).jpg' },
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg' },
          { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(149).jpg' }
        ]
      };
      render(){
        return(
            <div>
                <div style={{marginBottom: '60px', width: '100%', paddingLeft: '150px', paddingRight: '150px' }}>
                    <Typography variant="h2" gutterBottom align='center' style={{ fontWeight: 'bold', paddingTop:'500px' }}>
                        <Link to="/entrepreneur" style={{ color: 'inherit', textDecoration: 'none' }}>Entrepreneurs</Link>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom align='center' >
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                </div>
                <div>
                    <MDBLightbox md='4' images={this.state.noMargins} noMargins/>;
                </div>
            </div>
        )
      }
    
}
export default Automotive;




