import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <>
    <section id='top' className='banner-section'>
      <div className='container'>
        <div className='row'>
          <div className='banner-wraper d-flex align-items-center col-xl-6 col-md-8'>
            <div className='banner-content'>
              <div className='percentage'>
                20
                <span>%<br/>Off</span>
              </div>
              <h1>Spring</h1>
              <h3>Season festival</h3>
              <span className='year'>CATALOGUE 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
            <div className='about-content'>
              <h3>End Of Season</h3>
              <p>Avail massive discounts and get exciting offers with our shopping across all new arrival categories</p>
              <div className='border-space'></div>
              <Link to={"/products"} className='shop_now_btn'>Shop Now</Link>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
            <div className='about_img_wraper'>
              <img src={`http://ciyashop-react.potenzaglobalsolutions.com/static/media/season-img1.596c0f93.jpg`} width="100%" alt='about img'/>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
            <div className='about_img_wraper'>
              <img src={`http://ciyashop-react.potenzaglobalsolutions.com/static/media/season-img2.3a0c00ff.jpg`} width="100%" alt='about img'/>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 mb-4'>
            <div className='about_img_wraper'>
              <img src={`http://ciyashop-react.potenzaglobalsolutions.com/static/media/banner-video-bg.146527d8.png`} width="100%" alt='about img'/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home