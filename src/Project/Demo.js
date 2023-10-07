import React from 'react'
import img1 from '../Assest/Logo-White.png';
import img2 from '../Assest/Background-Image.png';
import loginicon from '../Assest/Login.png';
import registericon from '../Assest/Register-Icon.png';
import slider from '../Assest/Slider-Image.png';
import trial from '../Assest/Trial-Illustration.png';
import facebook from '../Assest/Facebook.png';
import twiter from '../Assest/Twitter.png';
import finance from '../Assest/Finance-Solution.png';
import business from '../Assest/Business-Analysis.png';
import marketing from '../Assest/Marketing-Strategy.png';
import customer_service from '../Assest/Customer-Service.png';
import sales from '../Assest/Sales.png';
import videoIcon from '../Assest/Video-Icon.png';
import saleing from '../Assest/Selling-Easier.png';
const Demo = () => {

    
  return (

      <div style={{ display: '', width: 200} }>

          <div style={{ height: 50, width: 100}}>
          <img style={{height:800, width: 1440}} src={img2} />
          </div >
          <div className='container'>
          <div className='logoimg'>
          <img src={img1}/>
          </div>
          <nav style={{ height: 50, width: 200}}>
          <div className='navbar'>
          <ul><a href="/home" style={{color:'white'}}>HOME</a></ul>
          <ul><a href="/subscription" style={{color:'white'}}>SUBSCRIPTION</a></ul>
          <ul><a href="/features" style={{color:'white'}}>FEATURES</a></ul>
          <ul> <img src={registericon} style={{height: 20,marginBottom:-4}}/><a href="/register" style={{color:'white',marginBottom:-4}}>Register</a></ul>
          <ul> <img src={loginicon} style={{height: 20,marginBottom:-4}}/><a href="/login" style={{color:'white'}}>Login</a></ul>
          </div>
          </nav>
          <div className='content1' style={{ height: 2, width: 272, color: 'white'}}>
            <h1>Digital solutions for your Digital problems</h1>
            <p>PlazaCRM enables a worldwide system of more than 100 kinds organizations in to change over more leads, draw in with clients, and develop their income. Change your business with the world's preferred client relationship the board programming.</p>
            <button>Know More</button>
          </div>
         
        </div>
        <div style={{ display: 'flex',alignContent: 'flex-end' }}>
                    <div className='imagelogo'>
                        <img src={slider} alt="Image Description" width="500" height="auto" />
                    </div>



                </div>
                <div className='content1' style={{ height: 2, width: 272, color: 'white'}}>
                <div className='imagelogo1'>
                        <img src={trial} alt="Image Description" width="500" height="auto" />
                    </div>
          </div>
          <div style={{ display: 'flex',alignContent: 'flex-end' }}>



          <div className="form-container">
      <h2 style={{color:"blue",margin:0,padding:0}}>Get started with your</h2>
      <h2 style={{color: "#eb5875",margin:0,padding:0}}>14-Day free tril</h2>
      <form >
        <div className="form-group">
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder='Company Name'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Email Address'
            required
          />
{/* Replace with your icon */}
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder='Phone Number'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder='Confirm Password'
            required
          />
        </div>
        <label style={{fontSize:14, marginLeft: 20}} htmlFor="agreeToTerms">I agree to the terms and conditions</label>
        <button type="submit">Create Account</button>
<div style={{marginLeft:87,marginTop:5,color:"#777777",fontSize:12}}>
       <span>---------- OR ----------</span> 
       </div>
       <div style={{marginLeft:105,marginTop:5,display:'flex'}}>
       <img src={facebook} alt="Image Description" />
       <img src={twiter} alt="Image Description" />
        
       </div>
      
      </form>
    </div>
                </div>

                <div className='solution' style={{marginLeft:670, fontWeight:'bold',fontSize:30}}>Solutions</div>
                <div className='xcenter' style={{marginLeft:87,marginTop:15,color:"blue",fontSize:12}}>
       <span>---------x---------</span> 
       </div>
       <div className='textcss' style={{textAlign:'center'}}>
       <span style={{display: '',marginLeft:10, fontWeight:'bold',fontSize:16}}>
        One Application solver your all Digital Problems
       </span>
       </div>




       <div className="photo-row">
      <div className="photo">
        <img src={finance} alt="Photo 1" />
        <div className='textcss2' style={{textAlign:'center'}}>
       <span style={{ fontWeight:'bold',fontSize:16}}>
        Finance Solution
       </span>
       </div>
        <p>Finance is the management of money, particularly in relation to companies, organisations, or</p>
      </div>
      <div className="photo">
        <img src={business} alt="Photo 2" />
        <div className='textcss2' style={{textAlign:'center'}}>
       <span style={{ fontWeight:'bold',fontSize:16}}>
        Business Analysis
       </span>
       </div>
        <p>Business analytics refers to the skills, technologies, practices for continuous iterative exploration</p>
      </div>
      <div className="photo">
        <img src={marketing} alt="Photo 3" />
        <div className='textcss2' style={{textAlign:'center'}}>
       <span style={{ fontWeight:'bold',fontSize:16}}>
        Marketing Strategy
       </span>
       </div>
        <p>A market analysis studies the attractiveness and the dynamics


of a special market</p>
      </div>
    
     
    </div>
<div className='otherimage' >
    <div className="photo">
        <img src={customer_service} alt="Photo 3" />
        <div className='textcss2' style={{textAlign:'center'}}>
       <span style={{ fontWeight:'bold',fontSize:16}}>
        Customer Service
       </span>
       </div>
        <p>Customer service is the provision of service to customers before, during, and after a purchase</p>
      </div>
      <div className="photo">
        <img src={sales} alt="Photo 3" />
        <div className='textcss2' style={{textAlign:'center'}}>
       <span style={{ fontWeight:'bold',fontSize:16}}>
        Sales
       </span>
       </div>
        <p>generating sales requires potential customers to understand that a product exists,t</p>
      </div>

      </div>


      <div className="pinkimagecontainer">
      <div style={{marginLeft:720,display:'flex'}}>
       <img src={videoIcon} alt="Image Description" />
       </div>
      <div className="pinkimagecontent">
      <span style={{ fontWeight:'bold',fontSize:30,color:'white', marginTop:100,marginLeft:90}}>
        Digital Solution For your Digital Problems
       </span>
        <p className='plazacrm' >PlazaCRM enables a worldwide system 
            of more than 100 kinds organizations
             in to change over more leads, 
             draw in with clients, and develop 
             their income. Change your business 
             with the world's preferred 
             client relationship the board programming.</p>
        <button style={{backgroundColor:'white',color:'black',fontSize:14,marginTop:90}}>START YOUR FREE TRIAL</button>
      </div>
    </div>


    <div className='content1' style={{ height: 2, width: 272, color: 'white'}}>
                <div className='footerimage'>
                        <img src={saleing} alt="Image Description" width="500" height="auto" />
                    </div>
          </div>

          <div className='footerimage' style={{ display: 'flex',alignContent: 'flex-end' }}>
          <div className="page-container">
      <h2 style={{width:800}}>FEATURES THAT MAKE SELLING EASIER</h2>
      <span>Conquer every stage of the customer journey with PLAZA
CRM</span>
      <ul>
      <li>Analytics</li>
          <li>Performance Management</li>
          <li>Predictive Sales and Intelligence</li>
          <li>Customization</li>
          <li>Marketing Automation</li>
          <li>Mobile apps</li>
          <li>Security</li>
          <li>Developer Platform</li>
          
      </ul>
      <button>Join Now</button>
    </div>
            </div>

<div style={{backgroundColor:'lightyellow', marginTop:100,textAlign:'center',width:1440,height:50}}>
Copyright 2020 © PlazaCRM. All Right Reserved.
</div>

      </div>
  )
}

export default Demo
