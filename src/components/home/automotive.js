import React from 'react'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';


export default function Enterprauners() {


    return (
        <div style={{ paddingTop: '20px' }}>
            <div style={{ marginBottom: '60px', width: '100%', paddingLeft: '150px', paddingRight: '150px'}}>
                <Typography variant="h2" gutterBottom align='center' style={{ fontWeight: 'bold' }}>
                    <Link to="/automotive" style={{ color: 'inherit', textDecoration: 'none' }}>Automotive</Link>
                </Typography>
                <Typography variant="subtitle1" gutterBottom align='center' >
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>
            </div>
            <div style={{ paddingLeft: "80px",paddingRight: "80px", marginLeft: "auto", marginRight: "auto"}}>
                <MDBCol style={{alignContent: "center", display: "flex", marginLeft: "auto", marginRight: "auto", marginBottom:"50px" }}>
                    <MDBCard style={{ width: "22rem" , marginLeft: "auto", marginRight: "auto"}}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    <MDBCard style={{ width: "22rem" , marginLeft: "auto", marginRight: "auto"}}>
                    <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>Card title</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make
                            up the bulk of the card&apos;s content.
                        </MDBCardText>
                        <MDBBtn href="#">MDBBtn</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
                    <MDBCard style={{ width: "22rem" , marginLeft: "auto", marginRight: "auto"}}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
              
            </div>
        </div>
    )
}