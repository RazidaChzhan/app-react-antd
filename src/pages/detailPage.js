import React, { Component }from 'react';
import { Layout} from 'antd';
import 'antd/dist/antd.css';
import HeaderPage from './headerPage';
import FooterPage from './footerPage';
import DetailNews from '../components/detailNews';

const { Content} = Layout;

export default class DetailPage extends Component {

  render () {
    return (
        <Layout>
        <HeaderPage/>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <DetailNews/>
          </div>
        </Content>
        <FooterPage/>
      </Layout>
    );
  }  
}
  

