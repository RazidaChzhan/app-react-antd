import React, { Component }from 'react';
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import AddNews from '../components/addNews';
import HeaderPage from './headerPage';
import FooterPage from './footerPage';

const { Content} = Layout;

export default class AddNewsPage extends Component {

  render () {
    return (
      <Layout>
        <HeaderPage />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <AddNews/>
          </div>
        </Content>
        <FooterPage/>
      </Layout>
    );
  }  
}
  


