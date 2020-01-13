import React from 'react';
import ImageList from '../../../component/ImageList/index'
import Ellipis from '../../../component/Ellipis/index'
import { Icon } from 'antd';
import data from './data'

export default class Image extends React.Component{
  renderFooter = (val: any) => {
    return(
      <div>
        <Ellipis value={val.fromPageTitleEnc} maxWidth={90} />
    <div style={{display:'flex',justifyContent:'space-between',fontSize: 16}}><span>${val.pageNum}</span><span>'''</span></div>
      </div>
    
    )
  }
  render() {

  
  return (
    <div>
      <ImageList
       data={data.data}
        hasSelect={true}
         max={2} imgKey={"pageNum"} renderFooter={this.renderFooter} />
    </div>
  );
  }
}

