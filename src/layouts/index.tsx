import React from 'react';

import Head from '../component/Header'
import { Layout } from 'antd';
import LeftMenu from '../layouts/component/menu'
const { Sider, Content } = Layout;
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
     
      
      <Layout  className = {styles.mainContainer}>
      <Head></Head>
      <Layout>
        <Sider className = {styles.sider}>
          <LeftMenu></LeftMenu>
        </Sider>
        <Content className = {styles.content}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
      
    </div>
  );
};

export default BasicLayout;
