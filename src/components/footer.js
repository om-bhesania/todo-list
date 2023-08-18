import React from 'react'
import './footer.css'
import { Link } from '@chakra-ui/react'
import {
    FaInstagramSquare,
    FaGithubSquare,
    FaLinkedin,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="credits">
        <div className="text">
        <p>All Copyrights to <Link href="https://github.com/om-bhesania" target='_blank'>@Om Bhesania</Link>.</p>
        </div>
        <div className="socials">
            <Link href='https://instagram.com/om_bhesania' target='_blank' > <FaInstagramSquare/></Link>
            <Link href='https://github.com/om-bhesania' target='_blank' > <FaGithubSquare/></Link>
            <Link href='https://linkedin.com/in/om-bhesania' target='_blank' > <FaLinkedin/></Link>
            <Link href='https://twitter.com/om_bhesania' target='_blank' > <FaTwitterSquare/></Link>
             
        </div>
    </div>
  )
}

export default Footer