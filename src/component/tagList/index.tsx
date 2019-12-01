/**
 * describe: 标签列表
 * 
 */
import React from 'react';
import  styles from './index.css'
import { Icon } from 'antd'

interface ITagProps {
    
}

class ITagState {
    tags: any[] = ['Unremovable', 'Tag 2', 'Tag 3'];
}

export default class TagList extends React.Component<ITagProps,ITagState>{
    public state = new ITagState();
    handleClose = () => {
        
    }

    render(){
        return(
            <div>
             <div className = {styles.tagBox}>
                <div className = {styles.box}>lalalla<div><Icon type="close" /></div></div>
             </div>
            </div>
        )
    }
}

