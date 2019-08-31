import React, { Component }from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import AddNews from './addNews';

const { Header, Content, Footer } = Layout;

export default class AddNewsPage extends Component {

  render () {
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
          <Menu.Item key="1">Все новости</Menu.Item>
          {/* <Menu.Item key="2">News Detail</Menu.Item> */}
          <Menu.Item key="3">Добавьте свою новость</Menu.Item>
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <AddNews/>
          </div>
        </Content>
      <Footer style={{ textAlign: 'center' }}>Chzhan Razida, ©2019 </Footer>
      </Layout>
    </div>
    );
  }
}
  


