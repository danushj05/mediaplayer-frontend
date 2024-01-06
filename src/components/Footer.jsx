import React from 'react'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div  style={{height:'300px '}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
       <div className='d-flex justify-content-evenly align-items-center w-100'>
        <div className="websites" style={{width:'400px'}}>
          <h4 className='mb-3'>
          <i class="fa-solid fa-video text-warning me-3"></i>
          video player
          </h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim cumque iure inventore provident dolore. Soluta quam provident impedit! Ipsum iure excepturi inventore dolorem tempora voluptas officiis, amet architecto labore.
          </h6>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3'> Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home page</Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}>watch history</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4 className='mb-3'>Guide</h4>
          <Link to={'https://bootswatch.com//'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
        </div>
        <div className="contacts  d-flex flex-column">
        <h4 className='mb-3'>Contact us</h4>
        <div className='d-flex mb-2'>
          <input type="text" className='form-control' placeholder='Enter your email id'></input>
          <button  className='btn btn-warning ms-2'>submit</button>
        </div>
          <div className='d-flex justify-content-evenly algn-items-center mt-1'>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-x-twitter fa-xl" style={{color: "#ffffff;"}}></i></Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-xl" style={{color: "#ffffff;"}}></i></Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-xl" style={{color: "#ffffff;"}}></i></Link>
          </div>
        </div>
       </div>
       <p className='pt-5'>copyright @2023. video player</p>
    </div>
  )
}

export default Footer