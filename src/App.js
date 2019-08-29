import React from 'react';
import './App.css';
class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     list:[
  //       {name:'房子',value:1},
  //       {name:'车子',value:2},
  //       {name:'鲜花',value:3},
  //       {name:'口红',value:4},
  //       {name:'开始',value:0},
  //       {name:'包包',value:5},
  //       {name:'5块',value:6},
  //       {name:'10块',value:7},
  //       {name:'1万块',value:8},
  //     ],
  //     currentIndex:1
  //   }
  // }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className='title'>七夕礼物</div>
          <Gif />
        </header>
      </div>
    );
  }
}
class Gif extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[
        {name:'房子',value:1},
        {name:'车子',value:2},
        {name:'鲜花',value:3},
        {name:'衣服',value:8},
        {name:'开始',value:0},
        {name:'包包',value:4},
        {name:'5块',value:7},
        {name:'10块',value:6},
        {name:'1万块',value:5},
      ],
      currentIndex:1
    }
    // this.handle = this.handle.bind(this)
  }
  handle(index){
    if(index!==0)return;
    let now =+new Date()
    this.tick(50,now)
  }
  tick(time,now){
    let num =1;
    this.timer =setInterval(() => {
      this.setState({
        currentIndex:num++
      })
      if(num===9){
        num = 1;
      }
      let t=parseFloat((+new Date()-now)/1000);
      if(t>4){
        clearInterval(this.timer)
        // this.tick(100,+new Date())
      }
      // if(t>5){
      //   clearInterval(this.timer)
      //   this.tick(500,+new Date())
      // }
      // if(t>8){
      //   clearInterval(this.timer)
      //   // this.tick(1000,+new Date())
      // }
    }, time);
  }
  render(){
    let allGif =this.state.list
    let el = allGif.map(item=>
    <div key={item.value} className='one' style={{background: (item.value===this.state.currentIndex) ? "yellow" : "#FFF"}} onClick={()=>this.handle(item.value)}>
    {item.name}</div>)
    return (<div className="box">{el}</div>)
  }
}
export default App;
