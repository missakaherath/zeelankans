import React from 'react'
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.jpg'
import logo3 from '../../images/logo3.jpg'
import logo4 from '../../images/logo4.jpg'
import logo5 from '../../images/logo5.png'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
var Coverflow = require('react-coverflow')

var fn = function () {
    /* do you want */
}

const Youtuber = () => {
    return (
        <div>
            <div style={{ marginTop:'80px',marginBottom: '60px', width: '100%', paddingLeft: '150px', paddingRight: '150px' }}>
                <Typography variant="h2" gutterBottom align='center' style={{ fontWeight: 'bold' }}>
                    <Link to="/youtubers" style={{ color: 'inherit', textDecoration: 'none' }}>Youtubers</Link>
                </Typography>
                <Typography variant="subtitle1" gutterBottom align='center' >
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                </Typography>

            </div>
            <Coverflow
                width={960}
                height={480}
                displayQuantityOfSide={2}
                navigation={false}
                enableHeading={false}
            >
                <div
                    onClick={() => fn()}
                    onKeyDown={() => fn()}
                    role="menuitem"
                    tabIndex="0"
                >
                    <img
                        src={logo1}
                        alt='title or description'
                        style={{ display: 'block', width: '100%' }}
                    />
                </div>
                <img src={logo2} alt='title or description' data-action="https://www.youtube.com" />
                <img src={logo3} alt='title or description' data-action="https://www.youtube.com" />
                <img src={logo4} alt='title or description' data-action="https://www.youtube.com/" />
                <img src={logo5} alt='title or description' data-action="https://www.youtube.com" />
            </Coverflow>
        </div>
    )
}
export default Youtuber;