/*
 * @author flyvv
 * @describe 图片List 利用react-window 封装 支持滚动
 *
 **/

import React from 'react';
import styles from './index.css';

interface IHeaderProps {
  imageUrl?: string;
}

export default class ImageList extends React.Component<IHeaderProps> {
  render() {
    return (
      <div>
        <div className={styles.imgBox}>{'我是图片'}</div>
        <div className={styles.textBox}>{'我是文字'}</div>
      </div>
    );
  }
}
