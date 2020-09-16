import React from 'react';
import Redirect from 'umi/redirect';

export default function(props: any) {
  return (
    <div>
      {props.children}
      <Redirect to="/ellipis" />
    </div>
  );
}
