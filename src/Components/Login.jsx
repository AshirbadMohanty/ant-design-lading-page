import { Form,Input,Checkbox,Button, } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom'
import  {FacebookFilled,GoogleCircleFilled,TwitterCircleFilled } from '@ant-design/icons'
import './css/Login.css'
import 'antd/dist/antd.css';

const Login =()=>{
  let history =useHistory();
  const onSubmit =()=>{
    localStorage.setItem('token','value')
    history.push('/home')
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='contant'>
    <div className='login-main'>
    <div className='login-img'>
        <img src="login.png" alt='img'></img>
        </div>
    <Form className='login-sub'
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
    <h1 style={{color:'white'}}>LOGIN</h1>
      <Form.Item style={{ margin: '10px'}}
        name="EMAIL"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input placeholder='EMAIL'  style={{padding:'10px',borderRadius:'10px',margin:'8px 0px', border:'2.5px solid rgb(15, 219, 255)',}}/>
      </Form.Item>

      <Form.Item  style={{ margin: '10px'}}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password placeholder='PASSWORD' style={{padding:'10px',borderRadius:'10px',margin:'8px 0px', border:'3px solid rgb(15, 219, 255)',}}  />

    

      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
      >
        <Checkbox style={{color:'white'}}>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        style={{ margin: '10px'}}
      >
        <Button className='button' block htmlType="submit" onClick={onSubmit} style={{width:'100%',backgroundColor:'rgb(15, 219, 255)',color:'white', borderRadius:'5px', height: '50px',fontSize:'20px',fontWeight:'500',border:'2.5px black',opacity:'0.' }}>
       
          SUBMIT
        </Button>
      </Form.Item>
      <div className='icon'>
      <div className='icon-facebook'>
      <FacebookFilled style={{color:'blue', fontSize:25}} font />
      </div>
    <div className='icon-google'>
    <GoogleCircleFilled style={{color:'grey',fontSize:25}} />
    </div>
    <div className='icon-twitter'>
    <TwitterCircleFilled style={{color:'skyblue',fontSize:25}} />
    </div>
     </div>
     </Form>    
       
    </div>
    </div>
  )
  }
export default Login