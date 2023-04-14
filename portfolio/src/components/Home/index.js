import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => {

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>Hi,<br/> I'm  <img src={LogoTitle} alt='developer'/>
                        udwig Murimi
                        <br/>
                        A Software Developer
                    </h1>
                    <h2>Full-Stack Developer | Javascript and Python Expert</h2>
                    <Link to="/contact" className='flat-button'>Contact Me</Link>
                </div>

            </div>
        </>
    );

}

export default Home