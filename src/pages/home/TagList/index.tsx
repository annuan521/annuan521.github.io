import React from 'react';
import TagList from '../../../component/tagList/index';
import Title from '../../../component/Title/index';
const data = [
  '我是tagaaaa',
  '我是tagbbbb',
  '我是tagccsxdhgjghhmhtdyhdrfgdfcc',
  '我是tagdddd',
  '我是tagefghghfeee',
  '我是tagfjghjrfhyfryhffff',
  '我是taggggg',
  '我是taghhhh',
  '我是taghgjjghjghjgyyyy',
  '我是tageeee',
  '我是tagiuuu',
  '我是tagbcbc',
  '我是tagdbdf',
  '我是tagdfbf',
  '我是tagfbdf',
  '我是tagbdbf',
  '我是tagdfbdf',
  '我是tageeee',
  '我是tagffff',
  '我是taggggg',
  '我是taghhhh',
  '我是tagyyyy',
  '我是tageeee',
  '我是tagiuuu',
  '我是tagbcbc',
  '我是tagdbdf',
  '我是tagdfbf',
  '我是tagfbdf',
  '我是tagbdbf',
  '我是tagdfbdf',
  '我是tageeee',
  '我是tagffff',
  '我是taggggg',
  '我是taghhhh',
  '我是tagyyyy',
  '我是tageeee',
  '我是tagiuuu',
  '我是tagbcbc',
  '我是tagdbdf',
  '我是tagdfbf',
  '我是tagfbdf',
  '我是tagbdbf',
  '我是tagdfbdf',
];

const data1 = [
  '我是tagaaaa',
  '我是tagbbbb',
  '我是tagcccc',
  '我是tagdddd',
  '我是tagecdfvgbhujmk,kjnhgfredrfgyhujeee',
  '我是tagffff',
  '我是taggggg',
  '我是taghtgybhnjmkmjnhbgvfhhh',
  '我是tagyyyy',
  '我是tageeee',
]

export default function() {
  return (
    <div style={{padding: 16}}>
      <Title text={'标签'} />
      <TagList tags={data1} hasFold={true}/>
      <TagList checked={true} tags={data} label={'组件标签'} hasFold={true} onchange={(v) => {console.log(v);
      }}/>
    </div>
  );
}
