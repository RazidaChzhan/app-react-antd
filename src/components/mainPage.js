import React, { Component }from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import NewsList from './newsList';

const { Header, Content, Footer } = Layout;

export default class MainPage extends Component {


  // loadNews(){
  //   fetch('https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=79f02d15a646407580b5aa67852e71c9')
  //   .then(response => response.json())
  //   .then(data => {
  //       let articles = data.articles
  //       console.log(articles);
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   });
  // }

  render () {
    // this.loadNews();
    return (
    <div>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">All news</Menu.Item>
          <Menu.Item key="2">News Detail</Menu.Item>
          <Menu.Item key="3">Add news</Menu.Item>
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <NewsList/>
          </div>
        </Content>
      <Footer style={{ textAlign: 'center' }}>Chzhan Razida, ©2019 </Footer>
      </Layout>
    </div>
    );
  }
}
  


