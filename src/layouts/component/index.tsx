import { Menu} from 'antd';
import Link from 'umi/link';
import React, { Fragment } from 'react';

interface IProps {}

class IState {
  openKeys: any[] = ['sub1'];
}
class LeftMenu extends React.Component<IProps, IState> {
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
       
            <Menu.Item key="1">
              <Link to={'/list'}>ListDelete</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={'/imageList'}>ImageList</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/tagList'}>TagList</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={'/ellipis'}>Ellipis</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to={'/expandTable'}>ExpandTable</Link>
            </Menu.Item>
     
          <Menu.Item key="6">
              <Link to={'/study'}>study</Link>
            </Menu.Item>
       
        
        </Menu>
      </Fragment>
    );
  }
}

export default  LeftMenu