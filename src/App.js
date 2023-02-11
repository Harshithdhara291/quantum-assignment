import {AiOutlineMinusCircle,AiOutlineMail} from 'react-icons/ai';
import {BsTwitter,BsFacebook, BsLinkedin,BsInstagram,BsSunglasses,BsGearWideConnected} from 'react-icons/bs';
import {IoConstruct} from 'react-icons/io5';
import {FaCarSide} from 'react-icons/fa';
import {GiVineFlower,GiMegaphone,GiMoneyStack} from 'react-icons/gi';

import './App.css';
import './navbar/bootstrap.min.css';
import NavbarHead from './NavbarHead';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="firstpart-header">
          <div className="first-header">
            <AiOutlineMinusCircle className='first-logo'/>
            <h1 className='head-header'>We are open 24/7</h1>
          </div>
          <div class="vl"></div>
          <div className="second-header">
            <AiOutlineMail className='first-logo'/>
            <h1 className='head-header'>business@gmail.com</h1>
          </div>
        </div>
        <div className="icons-header">
          <BsTwitter className='twitter-icon'/>
          <BsLinkedin className='linkedin-icon'/>
          <BsFacebook className='fb-icon'/>
          <BsInstagram  className='insta-icon'/>
        </div>
      </header>
      <NavbarHead/>
      <div className='container-one'>
          <div className='firstpart-co'>
              <p className='para-co'>Ki Name Dhake Bolto Tomake</p>
              <h1 className='head-co'>We Are Consulting For Your Business Finances</h1>
              <p className='para-co'>We have all the pieces needed to make a powerful business description for your website.<br/> Simply combine all your elements into one cohesive paragraph.</p>
              <img src="https://tinypic.host/images/2023/02/10/image479be5934f35ea03.png" alt="logo" height="400px" width="400px" className='image-logo01' />
              <button type="button" className='btn-co'>Start Now</button>
          </div>
          <img src="https://tinypic.host/images/2023/02/10/image479be5934f35ea03.png" alt="logo" height="400px" width="400px" className='image-logo02' />
      </div>
      <div className='container-two'>
        <div className='firstpart-ct'>
              <h1 className='head-co'>We Have Many Years Experience in Construction Business</h1>
              <p className='para-co'>In simple words, we can say that a construction company is a type of business, enterprise, or similar organization created and operating to construct a wide variety of buildings, developments, housing, path, pavement, roads, motorways, and other types of construction projects. We have all the pieces needed to make a powerful business description for your website. Simply combine all your elements into one cohesive paragraph.</p>
              <img src='https://images.pexels.com/photos/8837175/pexels-photo-8837175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="logo" height="400px" width="400px" className='image-logo21'/>
              <button type="button" className='btn-co'>Know More</button>
        </div>
        <img src='https://images.pexels.com/photos/8837175/pexels-photo-8837175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="logo" height="400px" width="400px" className='image-logo22'/>
      </div>
      <div className='logos-cont'>
        <div>
          <BsGearWideConnected className="icons-logo"/>
          <h1 className='head-logos'>Construction</h1>
        </div>
        <div>
          <FaCarSide className="icons-logo"/>
          <h1 className='head-logos'><span>DUMMY-</span>LOGO</h1>
        </div>
        <div>
          <BsSunglasses className="icons-logo"/>
          <h1 className='head-logos'>Random<span>Logo</span></h1>
        </div>
        <div>
          <IoConstruct className="icons-logo"/>
          <h1 className='head-logos'>Random<span>Brand</span></h1>
        </div>
      </div>
      <div className='container-three'>
        <div className='serv-cont'>
          <h1  className='three-head'>Our Services</h1>
          <hr/>
          <p className='three-para'>Civil & Structural Concrete, Masonry and Plaster, Architectural and Finishing Works, Pre Cast, re Engineered Structures, HVAC, Plumbing and Electrical, Waterproofing and Insulation</p>
        </div>
        <div className='three-cols'>
          <div className='each-three'>
            <div><GiVineFlower className='fin-icon'/></div>
            <h1 className='three-head'>Financial Consulting</h1>
            <p className='three-para'>Financial consulting is a service provided by Certified Financial Consultants to large corporations, government agencies and individual clients. The role of a financial consultant is to provide an independent</p>
          </div>
          <div className='each-three2'>
          <div><GiMegaphone className='fin-icon'/></div>
            <h1 className='three-head'>Content Marketing</h1>
            <p className='three-para'>Financial consulting is a service provided by Certified Financial Consultants to large corporations, government agencies and individual clients. The role of a financial consultant is to provide an independent</p>
          </div>
          <div className='each-three'>
            <div><GiMoneyStack className='fin-icon'/></div>
            <h1 className='three-head'>Finance Advice</h1>
            <p className='three-para'>Financial consulting is a service provided by Certified Financial Consultants to large corporations, government agencies and individual clients. The role of a financial consultant is to provide an independent</p>
          </div>
        </div>
        <button className='btn-co' type="button">All Services</button>
      </div>
      <footer className='footer'>
        <div>
          <h1 className='footer-head'>Subscribe Our Newsletter For More Update</h1>
          <p className='footer-para'>Get updates from a channel when you subscribe to it: Go to the channel homepage or watch page</p>
        </div>
        <div className='last-cont'>
          <input type="email" placeholder='Enter Your Mail' className='input'/>
          <button type='button' className='btn-last'>Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
