import React,{useState,createElement} from 'react'
import Navbar from './Navbar'
import { Carousel,Progress,Comment, Tooltip, } from 'antd';
import  {FacebookFilled, InstagramFilled} from '@ant-design/icons'
import { Card, Col, Row,Avatar  } from 'antd';
import { EditOutlined} from '@ant-design/icons';
import './css/Home.css'
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import Footer from './Footer';

const Home = () => {
const { Meta } = Card;
const contentStyle = {
  height: '100%',
  color: '#fff',
  lineHeight: '500px',
  textAlign: 'center',
};

const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);
const [action, setAction] = useState(null);

const like = () => {
  setLikes(1);
  setDislikes(0);
  setAction('liked');
};

const dislike = () => {
  setLikes(0);
  setDislikes(1);
  setAction('disliked');
};

  return (
    <div>
      
      <Navbar/>
        <div className='carousle'>
        <Carousel  autoplay>
    <div>
      <h3 className='one' style={contentStyle} >
      <div className='transbox'>
        <h1>
        TOURIST PLACES
        </h1>
        </div>
      </h3>
    </div>
    <div>
      <h3 className='two' style={contentStyle}>
        <div className='transbox'>
        <h1>
        TOURIST PLACES
        </h1>
        </div>
      </h3>
    </div>
    <div>
      <h3 className='three' style={contentStyle}>
      <div className='transbox'>
        <h1>
        TOURIST PLACES
        </h1>
        </div>
      </h3>
    </div>
        </Carousel>
        </div>
        <div className='hadding1'>
          <h2  style={{color:'white'}}>
            BEST PLACES OF TOURISM
          </h2>
        </div>
        <div className="site-card-wrapper">
       <Row gutter={16}>
       <Col span={8}>
       <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="c1.jpg"
      />
    }
    actions={[
      <EditOutlined key="edit" style={{fontSize:25 ,color: 'green' }}/>,
      <InstagramFilled key="click" style={{fontSize:25, color:'blueviolet' }}/>,
      <FacebookFilled key="click" style={{fontSize:25 , color:'blue'}}/>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="ABOUT "
      description="This is the description"
    />
  </Card>
      </Col>
      
      <Col span={8}>
      <Card
    style={{ width: 320 }}
    cover={
      <img
        alt="example"
        src="c3.jpg"
      />
    }
    actions={[
    
      <EditOutlined key="edit" style={{fontSize:25 ,color: 'green' }}/>,
      <InstagramFilled key="click" style={{fontSize:25, color:'blueviolet' }}/>,
      <FacebookFilled key="click" style={{fontSize:25 , color:'blue'}}/>
     
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="ABOUT "
      description="This is the description"
    />
    
  </Card>
      </Col>
      <Col span={8}>
      <Card
    style={{ width: 305 }}
    cover={
      <img
        alt="example"
        src="c4.jpg"
      />
    }
    actions={[
  
      <EditOutlined key="edit" style={{fontSize:25 ,color: 'green' }}/>,
      <InstagramFilled key="click" style={{fontSize:25, color:'blueviolet' }}/>,
      <FacebookFilled key="click" style={{fontSize:25 , color:'blue'}}/>
    
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="ABOUT "
      description="This is the description"
    />
  </Card>
      </Col>
    </Row>
  </div>

  <div className="site-card-wrapper">
       <Row gutter={16}>
       <Col span={8}>
       <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="c5.jpg"
      />
    }
    actions={[
   
      <EditOutlined key="edit" style={{fontSize:25 ,color: 'green' }}/>,
      <InstagramFilled key="click" style={{fontSize:25, color:'blueviolet' }}/>,
      <FacebookFilled key="click" style={{fontSize:25 , color:'blue'}}/>
    
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="ABOUT "
      description="This is the description"
    />
  </Card>
      </Col>
      <Col span={8}>
      <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="c6.jpg"
      />
    }
    actions={[
  
      <EditOutlined key="edit" style={{fontSize:25 ,color: 'green' }}/>,
      <InstagramFilled key="click" style={{fontSize:25, color:'blueviolet' }}/>,
      <FacebookFilled key="click" style={{fontSize:25 , color:'blue'}}/>
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="ABOUT "
      description="This is the description"
    />
  </Card>
      </Col>
      <Col span={8}>
      <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="c7.jpg"
      />
    }
    actions={[
  
      <EditOutlined key="edit" style={{fontSize:25 ,color: 'green' }}/>,
      <InstagramFilled key="click" style={{fontSize:25, color:'blueviolet' }}/>,
      <FacebookFilled key="click" style={{fontSize:25 , color:'blue'}}/>
      
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="ABOUT "
      description="This is the description"
    />
  </Card>
      </Col>
    </Row>
  </div>
  <div className='hadding2'>
          <h2  style={{color:'white'}}>
          PERCENTAGE OF TOURISM
          </h2>
        </div>
  <div className="percentage">
   <Card className='percentage-card' title="PERCENTAGE OF TOURISM " bordered={false} style={{ width: 300  }}>
    <h3>INDIA</h3>
    <Progress percent={99.9} />
    <h3>AUSTRALIA</h3>
    <Progress percent={85}  />
    <h3>AMERICA</h3>
    <Progress percent={60} />
   <h3>GERMAN</h3>
    <Progress percent={30} />
    <h3>BRAZIL</h3>
    <Progress percent={20} />
    </Card>
   
   <div>
   <Card className='percentage-card2' title="HIGHEST AND LOWEST  " bordered={false} style={{ width: 300 }}>
   <div>
   <h2>HIGHEST TOURISM</h2>
   <h3>INDIA</h3>
   <Progress type="circle" percent={99.9} width={60} />
   </div>

   <div>
   <h2>LOWEST TOURISM</h2>
   <h3>BRAZIL</h3>
   <Progress type="circle" percent={20} width={60} status="exception" />
   </div>
    </Card>
   </div>
  </div>
  <div className='comment-main'>
  <div className='hadding3'>
          <h2  style={{color:'white'}}>
          COMMENTS
          </h2>
        </div>
    <div className='comment'>
    <Comment className='comment'
      actions={[ <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
    </div>
    <div className='comment'>
    <Comment
      actions={[ <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
    </div>
    <div className='comment'>
    <Comment
      actions={[ <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
      content={
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      }
      datetime={
        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
    </div>
    <Footer/>
  </div>
    </div>
  )
}

export default Home