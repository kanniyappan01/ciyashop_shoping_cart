import './Footer.scss'
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link } from 'react-router-dom';

const footerIcons = [<TwitterIcon id="fo_icon"/>, <GoogleIcon id="fo_icon"/>, <InstagramIcon id="fo_icon"/>, <LinkedInIcon id="fo_icon"/>, <PinterestIcon id="fo_icon"/>];

const UsefulLinks = ["Home", "About Us", "Shop", "Contact Us", "Privacy Policy", "Terms Conditions"];

const Information = ["Look Book", "Information", "Instagram Wall", "Typography", "Parallax Presentation", "Modern Process", "Warranty And Services"];

const ContactInfo = [
  {icon:<RoomIcon id="addres_icon"/>, detials: "1635 Franklin Street Montgomery, Near Sherwood Mall. AL 36104" },
  {icon:<MailOutlineIcon id="addres_icon"/>, detials: "support@ciyashop.com" },
  {icon:<PhoneIcon id="addres_icon"/>, detials: "126-632-2345" },
]

const Footer = () => {
  return (<>
    <footer>
      <div className='footer_wraper'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 footer'>
              <h1 className='logo mb-3'>CIYASHOP</h1>
              <p>CiyaShop is an enchanting and easy to use e-Commerce WP theme that allows you to sell your products in a dynamic way.</p>
              <p>The theme is packed with everything you need to create a new website.</p>
              <div className='icons_group'>
                {footerIcons.map((icon,i) => (
                  <Link key={i} className='link'>{icon}</Link>
                ))}
              </div>
            </div>
            <div className='col-lg-3 col-md-6 footer'>
              <h5 className='mb-4'>Useful Links</h5>
              <ul>
                {UsefulLinks.map((text,i) => (
                  <li key={i}><Link className='footer_link'><KeyboardArrowRightIcon id="footer_arrow"/>{text}</Link></li>
                ))}
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 footer'>
                <h5 className='mb-4'>Information</h5>
                <ul>
                  {Information.map((text,i)=>(
                    <li key={i}><Link className='footer_link'><KeyboardArrowRightIcon id="footer_arrow"/>{text}</Link></li>
                  ))}
                </ul>
            </div>
            <div className='col-lg-3 col-md-6 footer'>
                 <h5 className='mb-4'>Contact Info</h5>
                 <ul className='footer_address mb-4'>
                    {ContactInfo.map((item,i)=> (
                      <li key={i}>{item.icon}<span>{item.detials}</span></li>
                    ))}
                 </ul>
                 <div className='news_letter' >
                      <h5 className='mb-4'>Newsletter</h5>
                      <form className='d-flex'>
                          <div>
                            <input type={"text"} placeholder="Enter your email"/>
                          </div>
                          <div>
                            <button><SendIcon id="send_icon"/></button>
                          </div>
                      </form>
                 </div>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
    <div className='footer_top'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <p>CiyaShop Mobile app is Available now. Download it now on your favorite device and indulge in a seamless shopping experience.</p>
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              <div className='col-md-4'>
                <img alt='img' src={`data:image/png;base64,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`}/>
              </div>
              <div className='col-md-8' >
                <div className='d-flex'>
                  <img className='mx-2' alt="site_img" src={`data:image/png;base64,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`}/>
                  <img alt='site-img' src={"data:image/png;base64,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"}/>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='footer_bottom'>
        <div className='container'>
            <div className='d-flex justify-content-between'>
            <p>© Copyright 2019 CiyaShop All Rights Reserved.</p>
            <div className='site img'>
              <img src={`data:image/png;base64,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`} alt='site-images'/>
            </div>
            </div>
        </div>
    </div>
    <a href='#top' className='top_arrow'><KeyboardArrowUpIcon id="icon" /></a>
    </>
  )
}

export default Footer