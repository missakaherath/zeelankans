import Image from 'react-bootstrap/Image'
import auckland from '../../images/auck2.jpg'

var sectionStyle = {
  // maxWidth: "100%",
  // height: "auto",
  backgroundSize: "cover",
  width:"100%"
 
};

export default function CoverHome () {

    return (
      <div style={sectionStyle}>
        <Image  src={auckland}  style={{width:"100%", height:"auto"}}/>
      </div>
      
    );
  
}