import * as React from 'react';
import { Checkbox } from 'antd';

const { Group } = Checkbox;

interface IProps {
  checkedList: any[]
   onChange:(val: any[])=> void;
    options:any[]
}

const CascadeLabels: React.FC<IProps>=({ checkedList, onChange, options }) =>{

 
  const onCheckAllChange = (e: any) => {   
    onChange(e.target.checked ? options.map(({ id }) => id) : []);
  };

  const onGroupChange = (checkedValues: any) => {   
    onChange(checkedValues);
  };

  const checkAll = checkedList.length && checkedList.length === options.length ;

  const indeterminate = !!checkedList.length && !checkAll;
  if (!options.length) return null;
  return (
    <div>
      <div>
        <Checkbox checked={checkAll} onChange={onCheckAllChange} indeterminate={indeterminate}>
          全选
        </Checkbox>
      </div>
      <Group
       onChange={onGroupChange} 
      value={checkedList}
    >
        {options.map(item => (
          <div key={item.value}>
            <Checkbox value={item.id}>{item.name}</Checkbox>
          </div>
        ))}
      </Group>
    </div>
  );
}
export default CascadeLabels;