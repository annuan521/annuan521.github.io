import React from 'react';
import ImageList from '../../../component/ImageList/index'
import data from './data'

export default function() {
  return (
    <div>
        <ImageList data={data.data} hasSelect={true} max={2} imgKey={"pageNum"} />
    </div>
  );

}

