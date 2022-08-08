import React from 'react'
import './css/Footer.css'
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import  {FacebookFilled,GoogleCircleFilled,InstagramFilled,TwitterCircleFilled } from '@ant-design/icons'
function Footer() {
  return (
    <>
    <div className='footer-main'>
       <div className='footer'>
           <div className='seaction'>
    <Card title="ABOUT" bordered={false} style={{ width: 300, backgroundColor:'whitesmoke' }}>
      <p>
      TOURISM, THE ACT AND PROCESS OF SPENDING TIME AWAY FROM HOME IN PURSUIT OF RECREATION, RELAXATION, AND PLEASURE, WHILE MAKING USE OF THE COMMERCIAL PROVISION OF SERVICES.
      </p>
    </Card>
           </div>
           <div className='section'>
           <h2 style={{color:'Black'}}>
               QUICK LINK
           </h2>
           <ul className='section-sub' style={{color:'black'}} >
           <Link style={{color:'Black'}}>
           <li>HOME</li>
           </Link>
           <Link style={{color:'Black'}}>
           <li>TOURIST LIST</li>
           </Link>
           </ul>  
           </div>
           <div className='section'>
           <h2 style={{color:'black'}}>
           SOCIAL LINK
           </h2>
           <div className='icon-f'>
      <div className='icon-facebook'>
      <FacebookFilled style={{color:'blue', fontSize:25}} font />
      </div>
    <div className='icon-google'>
    <InstagramFilled style={{color:'blueviolet',fontSize:25}} />
    </div>
    <div className='icon-twitter'>
    <TwitterCircleFilled style={{color:'skyblue',fontSize:25}} />
    
    </div>
     </div>
           </div>
           
           </div>
           <h1 style={{color:'white',display:'flex',justifyContent:'center'}}>© TOURISM Inc. 2022. All rights reserved.</h1>
           <div>
         
           </div>
       </div>
    </>
  )
}

export default Footer