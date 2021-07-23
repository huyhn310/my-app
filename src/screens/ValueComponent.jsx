
import React from 'react'


class ValueComponent extends React.Component
{
  constructor(probs){
    super(probs);
    this.state = {value:0, amount:'2'};
    this.incrementByAmount = this.incrementByAmount.bind(this);
    this.addAsync = this.addAsync.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
  }
  
  changeAmount = (value) => {
    console.log('Amount: '+ this.state.amount+',  value:' + value);
    this.setState({amount: value});
  }

   incrementByAmount() {
    console.log('Amount: '+ this.state.amount+',  value:' + this.state.value);
    this.setState({value: this.state.value + (Number(this.state.amount) || 0)})
  }
  
   addAsync = ()=>{
    console.log('amout:' + this.state.amount);
    setTimeout(() => {
    this.incrementByAmount();
  }, 1000);}

  shouldComponentUpdate(nextProps, nextState){
    console.log(this.state);
    return !(nextState.amount == this.state.amount && nextState.value == this.state.value);
  }

  render() { 
      return (<>
        <div className='row'>
        <button className='button'
          arial-label="Increment value"
          onClick={()=>this.setState({value: this.state.value + 1})}
        >
          +
        </button>
      
        <span>{this.state.value}</span>
        <button className='button'
          arial-label="Decrement value"
          onClick={()=>this.state.value = this.state.value - 1}
        >
          -
        </button>
      </div>
      <div>
      
        <input 
        value={this.state.amount}
        onChange={(e)=>{this.changeAmount(e.target.value)}}
        />
        <button className='button'
          arial-label="Add amount"
          onClick={()=>{this.incrementByAmount(this.state.amount)}}
        >
          Add amount
        </button>
        <button className='button'
          arial-label="Add Async"
          onClick={this.addAsync}
        >
          Add Async
        </button>
      </div>
      </>)
  
  }
}

export default ValueComponent;