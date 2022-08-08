import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import {  Layout,Menu, } from 'antd'
import './css/Navbar.css'



const { Header } = Layout;
const Navbar = () => {
  let history =useHistory();
  const onlogout =()=>{
    localStorage.removeItem('token','value')
    history.push('/')
  }

  
  return (
    <div className='nav'>
     <Layout className='layout'>
    <Header  style={{ position: 'fixed', width: '100%',backgroundColor:'rgb(15, 219, 255)', zIndex:'1',}}>
      <div className="logo" />
    <div>
    <Menu className='menu'  mode="horizontal" style={ {backgroundColor:'rgb(15, 219, 255)', }} defaultSelectedKeys={['1']} >
        <Menu.Item  key="1"><Link to='/home' style={{color:'white'}}>HOME</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/touristlist' style={{color:'white'}}>TOURIST LIST</Link></Menu.Item>
        <Menu.Item key="3" ><Link onClick={onlogout} style={{color:'white'}}>LOGOUT</Link></Menu.Item>
      </Menu>
    </div>
    </Header>
  </Layout>,
  
    </div>
  )
}

export default Navbar

