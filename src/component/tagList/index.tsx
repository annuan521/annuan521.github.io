/**
 * describe: 标签列表
 *
 */
import React from 'react';
import styles from './index.css';
// import { Icon } from 'antd'
import Ellipis from '../../component/Ellipis';

interface ITagProps {
  tags: any[];
  label?: string;
}

class ITagState {}

export default class TagList extends React.Component<ITagProps, ITagState> {
  public state = new ITagState();
  handleClose = () => {};

  render() {
    const { tags, label } = this.props;
    const labelTit = label || '标签:';

    return (
      <div className={styles.label}>
        {/* {label ? (
          <span className={styles.title}>{label}</span>
        ) : (
          <span className={styles.title}>标签:</span>
        )} */}

        <span className={styles.title}>{labelTit}</span>
        <div className={styles.tagBox}>
          {tags.map(tag => (
            <div className={styles.box}>
              <Ellipis value={tag} maxWidth={60} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
