import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faCode} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faTwitter,faGithub, faSkype} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    return(
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img className='sub-log' src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="Ludwig" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact="true" activeclassname="active" to="/home" >
                    <FontAwesomeIcon onClick={() => setShowNav(false)}icon={faHome}color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                    <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faUser}color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project-link" to="/project" >
                    <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faCode}color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link"to="/contact" >
                    <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faEnvelope}color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/ludwig-murimi/">
                      <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href="https://github.com/lu-dwig">
                      <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href="https://twitter.com/LudwigMunyi">
                      <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href="skype:live:.cid.d94cac83e11fe430">
                      <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
)}
    


export default Sidebar