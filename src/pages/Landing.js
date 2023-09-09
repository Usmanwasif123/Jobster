import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components'
import {Link} from 'react-router-dom';

const Landing = () => {
  return(
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            {/*info*/}
            <div className='info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>Duis beard kogi, snackwave ipsum venmo commodo slow-carb 
                    succulents lyft try-hard ut pop-up shaman subway tile. 
                    Officia flexitarian listicle single-origin coffee taxidermy. 
                    Twee ut fingerstache VHS consequat, leggings drinking vinegar 
                    pitchfork irure ea sartorial freegan. Grailed knausgaard do, 
                    marxism drinking vinegar minim semiotics beard tumeric woke 
                    pitchfork readymade snackwave.
                </p>
                <Link to='/register 'className='btn btn-hero'>Login/Register</Link>
            </div>
            <img src={main} alt='job hunt' className='img main-img'/>
        </div>
    </Wrapper>
  );
  
};

export default Landing;
