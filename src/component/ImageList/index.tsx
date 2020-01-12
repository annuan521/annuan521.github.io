/*
 * @author flyvv
 * @describe 图片List 利用react-window 封装 支持滚动
 *
 **/

import React from 'react';
import styles from './index.css';
import { Checkbox } from 'antd';
import Ellipis from '../Ellipis'
const CheckboxGroup = Checkbox.Group;

interface IProps {
  hasSelect?: boolean;
  data: any[];
  onchange?: (values: any) => void;
}
class IState {
  checkedList: any;
}

export default class ImageList extends React.Component<IProps, IState> {
  public state: IState = {
    checkedList: this.props.data,
  };


  onChange = (checkedList: any) => {

    this.setState({
      checkedList,
    }, () => {
      if (this.props.onchange)
        this.props.onchange(checkedList)
    });
  };

  renderHasSelect = () => {
    const { data } = this.props;
    return (
      <CheckboxGroup onChange={this.onChange}>
        {data.map(v => (
          <Checkbox value={v} >
            <div>
              <Ellipis value={v.fromPageTitleEnc} maxWidth={90} />
              <div style={{ width: 100, height: 150 }}>
                <img style={{ width: '100%', height: '100%' }} src={v.middleURL} />
              </div>
            </div>
          </Checkbox>
        )
        )}
      </CheckboxGroup>
    )
  }

  renderDefaultImgList = () => {
    const { data } = this.props;
    return (
      <div>
        {data.map(v => (
          <div>
            <Ellipis value={v.fromPageTitleEnc} maxWidth={90} />
            <div style={{ width: 100, height: 150 }}>
              <img style={{ width: '100%', height: '100%' }} src={v.middleURL} />
            </div>
          </div>
        )
        )}
      </div>
    )

  }

  render() {
    const { data } = this.props;
    const imgListLength = data.length || 0;
    return (
      <div
        style={{
          padding: '8px',
          boxShadow: '0 0 5px #ddd ',
          minHeight: '600px',
          margin: '16px',
        }}
      >
        <div style={{ margin: ' 10px 0' }}>图片总数：{imgListLength}</div>
        {
          this.props.hasSelect ? this.renderHasSelect() : this.renderDefaultImgList()
        }
      </div>
    );
  }
}
