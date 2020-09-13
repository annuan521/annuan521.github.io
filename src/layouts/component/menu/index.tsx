import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import React, { Fragment } from 'react';

const { SubMenu } = Menu;

interface IProps {}

class IState {
  openKeys: any[] = ['sub1'];
}

export default class LeftMenu extends React.Component<IProps, IState> {
  public state = new IState();
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  onOpenChange = (openKeys: any) => {
    const latestOpenKey = openKeys.find((key: any) => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
          <SubMenu
            key="sub1"
            // onTitleClick={}
            title={
              <span>
                <Icon type="setting" />
                <span>组件库啊</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to={'/home/list'}>ListDelete</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={'/home/imageList'}>ImageList</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/home/tagList'}>TagList</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={'/home/ellipis'}>Ellipis</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to={'/home/expandTable'}>ExpandTable</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
              <Link to={'/home/study'}>study</Link>
            </Menu.Item>
       
        
        </Menu>
      </Fragment>
    );
  }
}
