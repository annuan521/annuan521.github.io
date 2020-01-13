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
  // 是否支持多选
  hasSelect?: boolean;
  // 数据
  data: any[];
  // 多选结果返回
  onchange?: (values: any) => void;
  // 多选支持最多选几个
  max?: number;
  // 多选支持最多选几个时 必须传递一个主键值
  imgKey?: string;
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
    const { data, max=data.length,imgKey } = this.props;
    const {checkedList} =this.state;
    const realMax = max - 1;
    return (
      <CheckboxGroup onChange={this.onChange}>
        {data.map(v =>{ 
          let disable = false;
          if(imgKey){ 
          if(checkedList.length > realMax){
            disable = true;
            checkedList.map((item:any)=>{ 
              if(v[imgKey] === item[imgKey]){
                disable=false
              } 
            })
          }
        }
          return (
          <Checkbox value={v} disabled={disable}>
            <div>
              <Ellipis value={v.fromPageTitleEnc} maxWidth={90} />
              <div style={{ width: 100, height: 150 }}>
                <img style={{ width: '100%', height: '100%' }} src={v.middleURL} />
              </div>
            </div>
          </Checkbox>
        )}
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
