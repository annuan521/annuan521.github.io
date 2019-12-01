import React from 'react';
import Item from './item';

class IListProps {

}
class IState {
  list:any[] = [1,2,3,4,8,5,6,9,7];
}
class List extends React.Component<IListProps,IState>{
  public state = new IState();
  handleDeleteList = (text: any) => {
    const { list } = this.state;
    const index = list.findIndex( v => v=== text);
    // const newList = list.splice(index, 1);
    // console.log(list, newList);
    
    list.splice(index, 1);
    this.setState({
      list
    })
  }

  render(){
    return(
      <div>
        {
          this.state.list.map((item,index)=><Item text={item}
          handleDeleteList={this.handleDeleteList}/>)
        }
      </div>
    )
  }
}
export default List;
