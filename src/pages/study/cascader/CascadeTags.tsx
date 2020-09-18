import * as React from 'react';
import { Tag } from 'antd';

interface IProps {
  checkList: any[];
  onChange:(val: any[]) => void
}

const CascadeTags: React.FC<IProps> = ({checkList, onChange}) => {

  const onClose = (idx:number) => {
    onChange(checkList.slice(0, idx).concat(checkList.slice(idx + 1)));
  };
  return (
    <div>
      <div>
        <span>已选</span> &nbsp;
        <span>{checkList.length}</span>
      </div>
      <div>
        {checkList.map((entry: any, idx: number) => (
          <div key={entry.value} className="lfc-cascader-tags-item">
            <Tag closable onClose={() => onClose(idx)} >
              {entry.label}
            </Tag>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CascadeTags;
